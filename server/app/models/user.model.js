
/*
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var UserSchema = new Schema({
  name: { type: String, default: '' },
  githubUsername: { type: String, default: '' },
  email: { type: String, default: '' },
  roadMaps: [{ type: Schema.Types.ObjectId, ref: 'Roadmap' }]
});

/**
 * User plugin
 */

// UserSchema.plugin(userPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

UserSchema.method({

});

/**
 * Statics
 */

UserSchema.static({

});

/**
 * Register
 */

mongoose.model('User', UserSchema);
