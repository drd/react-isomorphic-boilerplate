var _ = require('underscore');
var compare = require("hamming-distance");

module.exports = {
    distance: (a, b) => (160 - compare(a,b)) / 1.6,
    senders: (clusters) => _.uniq(_.pluck(clusters, 'sender')).length
};