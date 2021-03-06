const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');

const SongModel = require('../models/SongModel');

const SongsCollection = Backbone.Collection.extend({
    model: SongModel,
    url:"api/public/search"
});

module.exports = SongsCollection;
