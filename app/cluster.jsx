import _ from 'underscore';
import React from 'react';
import {Table, Button, ButtonGroup, Glyphicon, Pager, PageItem, ListGroup, ListGroupItem, Well} from 'react-bootstrap';

import {distance} from './utils';


class Cluster extends React.Component {
    static dataDependency(params, model) {
        console.log(params, model);
        return model.cluster(params.id);
    }

    componentWillUpdate() {
        if (Math.random() > 0.7) {
            this.cluster().showHistory = true;
        }
    }

    clusterId() {
        return this.context.routeHandlers[0].getCurrentParams().id;
    }

    cluster() {
        return this.props.clusters[this.clusterId()];
    }

    subClusters() {
        return _.chain(this.cluster())
            .groupBy(c => c.nilsimsa)
            .reduce((grouped, cluster, hash) => {
                grouped[hash] = cluster; //{length: cluster.length, messages: cluster};
                return grouped;
            }, {})
            .value();
    }

    spam() {
        this.cluster().isSpam = true;
        this.context.transitionTo('index');
    }

    render() {
        var clusterHash = this.clusterId();
        return <div>
            <ButtonGroup>
                <Button onClick={this.spam.bind(this)}><Glyphicon glyph='flag'/> Spam</Button>
                <Button onClick={this.ok}><Glyphicon glyph='ok'/> OK</Button>
                <Button onClick={this.refresh}><Glyphicon glyph='refresh'/> Refresh</Button>
            </ButtonGroup>
            {this.cluster().showHistory && <History />}
            {_.map(this.subClusters(), (subCluster, hash) => <SubCluster {...{subCluster, clusterHash, hash}} />)}
        </div>;
    }
}

Cluster.contextTypes = {
    routeHandlers: React.PropTypes.array,
    transitionTo: React.PropTypes.func.isRequired
};


class History extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: Math.ceil(Math.random() * 50),
            senders: Math.ceil(Math.random() * 5),
            similarity: Math.ceil(Math.random() * 20) + 80
        };
    }

    render() {
        return <Table bordered condensed hover>
            <thead>
                <tr><th colSpan={2}>History</th></tr>
            </thead>
            <tbody>
                <tr><td colSpan={2}>
                    <a href='#'>{this.state.messages} messages</a> sent by <a href='#'>{this.state.senders} senders</a>
                </td></tr>
                <tr>
                    <td>Similarity: {this.state.similarity}%</td>
                    <td>OK'd by <a href='#'>Matt</a></td>
                </tr>
                <tr>
                    <td>Read messages</td>
                    <td>Date: 2013</td>
                </tr>
            </tbody>
        </Table>
    }
}


class SubCluster extends React.Component {
    constructor(props) {
        super(props)
        this.state = {messageIndex: 0};
    }

    message() {
        return this.props.subCluster[this.state.messageIndex];
    }

    goBack(e) {
        this.setState({messageIndex: this.state.messageIndex == 0
            ? this.props.subCluster.length - 1
            : this.state.messageIndex - 1});
        e.preventDefault();
    }

    goForward(e) {
        this.setState({messageIndex: (this.state.messageIndex + 1) % this.props.subCluster.length});
        e.preventDefault();
    }

    render() {
        var sentOn = new Date(this.message().creation_date);
        return <ListGroup key={this.props.hash}>
            <ListGroupItem>Message {this.state.messageIndex + 1} of {this.props.subCluster.length}</ListGroupItem>
            <ListGroupItem>{sentOn.toString()}</ListGroupItem>
            <ListGroupItem><strong>Sender:</strong> {this.message().sender}</ListGroupItem>
            <ListGroupItem><strong>Subject:</strong> {this.message().name}</ListGroupItem>
            <ListGroupItem><strong>Similarity:</strong> {distance(this.props.clusterHash, this.props.hash).toPrecision(3)}%</ListGroupItem>
            <ListGroupItem><pre>{this.message().description}</pre></ListGroupItem>
            <ListGroupItem>
                {(this.props.subCluster.length > 1) && <Pager>
                    <PageItem previous onClick={this.goBack.bind(this)}>
                        Previous
                    </PageItem>
                    <PageItem next onClick={this.goForward.bind(this)}>
                        Next
                    </PageItem>
                </Pager>}
            </ListGroupItem>
        </ListGroup>
    }
}


class Message extends React.Component {
    render() {
        return <ListGroup key={this.props.message.nilsimsa}>
            <ListGroupItem>{new Date(this.props.message.creation_date).toDateString()}</ListGroupItem>
            <ListGroupItem><strong>From:</strong> {this.props.message.name}</ListGroupItem>
            <ListGroupItem><strong>Similarity:</strong> {distance(this.props.clusterHash, this.props.message.nilsimsa).toPrecision(3)}%</ListGroupItem>
            <ListGroupItem><pre>{this.props.message.description}</pre></ListGroupItem>
        </ListGroup>
    }
}

export default Cluster;