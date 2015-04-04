'use strict'

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
            Schema = mongoose.Schema;

/**
 * Crime Schema
 */
var CrimeScheme = new Schema({
        date: {
            type: Date,
        },

        time: {
            type: Date
        },

        location: {
            type: String,
        },

});

mongoose.model('Crime', CrimeScheme);
