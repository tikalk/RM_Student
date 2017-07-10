/*
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Roadmap schema
 */

var RoadmapSchema = new Schema({
    userId: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    },
    enlistedAt: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: ''
    },
    currentStage: {
        type: String,
        default: ''
    },
    currentResourceIndex: {
        type: Number,
        default: 0
    },
    gitRepo: {
        type: String,
        default: ''
    },
    originalRepo: {
        type: String,
        default: ''
    },
    tutorId: {
        type: String,
        default: ''
    },
    tutorGithubName: {
        type: String,
        default: ''
    },
    tutorFeedback: {
        type: String,
        default: ''
    },
    tutorRating: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    feedback: {
        type: String,
        default: ''
    }
});

/**
 * Methods
 */

RoadmapSchema.method({});

/**
 * Statics
 */

RoadmapSchema.static({});

/**
 * Register
 */

mongoose.model('Roadmap', RoadmapSchema);
