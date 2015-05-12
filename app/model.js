import agent from 'superagent';


function mergeHTTPErrorWithSuperagentErr(err, result) {
    var httpErr = result.ok ? null : {
        message: result.text,
        code: res.statusCode
    };
    return err || httpErr;
}


function requestHandler(resolve, reject) {
    return function(err, result) {
        err = mergeHTTPErrorWithSuperagentErr(err, result);
        if (err) {
            reject(err);
        } else {
            console.log('result', result.body);
            resolve(result.body);
        }
    }
}


function get(url, params) {
    return new Promise((resolve, reject) => {
        agent.get('/api' + url)
             .send(params)
             .end(requestHandler(resolve, reject));
    });
}


const model = {
    clusters() {
        return get('/clusters');
    },

    cluster(id) {
        return get('/clusters/' + id);
    }
}


export default model;