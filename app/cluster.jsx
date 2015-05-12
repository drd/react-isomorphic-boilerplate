import React from 'react';
import {ListGroup, ListGroupItem, Well} from 'react-bootstrap';

import {distance} from './utils';


class Cluster extends React.Component {
    static dataDependency(params, model) {
        console.log(params, model);
        return model.cluster(params.id);
    }

    clusterId() {
        return this.context.routeHandlers[0].getCurrentParams().id;
    }

    cluster() {
        return this.props.clusters[this.clusterId()];
    }

    render() {
        return <div>
            {this.cluster().map(m => <Message clusterHash={this.clusterId()} message={m} />)}
        </div>;
    }
}

Cluster.contextTypes = {
    routeHandlers: React.PropTypes.array
};


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