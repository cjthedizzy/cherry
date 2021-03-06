const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');

const Router = require('./router');
Backbone.$ = $;
window.App = App;

const App = new Mn.Application({
    onStart: function(options) {
        var router = new Router();
        Backbone.history.start();
        if (window.__agent) {
            window.__agent.start(Backbone, Mn);
        }
    }
});

$(document).ready(function() {
    App.start();
    console.log("Starting App...");
});
