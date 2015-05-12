import _ from 'underscore';
import React from 'react';
import {Link, RouteHandler} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

import {senders} from './utils';


class Clusters extends React.Component {
    static dataDependency(params, model) {
        console.log(params, model.clusters());
        return model.clusters();
    }

    renderCluster(cluster, key) {
        return !cluster.isSpam && <li key={key}>
            <Link to="cluster" params={{id: key}}>
                {cluster.length} messages from {senders(cluster)} senders
            </Link>
        </li>;
    }

    render() {
        return <Grid>
            <Row>
                <Col xs={4}>
                    <ol>
                        {_.map(this.props.clusters, this.renderCluster)}
                    </ol>
                </Col>
                <Col xs={8}>
                    <RouteHandler clusters={this.props.clusters}/>
                </Col>
            </Row>
        </Grid>;
    }

}

export default Clusters;