/**
 * Module dependencies.
 */

var Schema = require('jugglingdb').Schema;
var schema = new Schema('mongodb', {url: 'mongodb://localhost/mean-dev'});
// var schema = new Schema('redis', {port: 6379});


var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env];
    // Schema = mongoose.Schema;


/**
 * Article Schema
 */
var Article = schema.define('Article',{
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: String,
        ref: 'User'
    }
});

/**
 * Statics
 */
Article.prototype.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user').exec(cb);
    }
};

// schema.model('Article', ArticleSchema);

schema.models.Article;
