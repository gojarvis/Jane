/**
 * Module dependencies.
 */

var Schema = require('jugglingdb').Schema;
var schema = new Schema('mongodb', {url: 'mongodb://localhost/jugg'});

var User = require('./user');

var env = process.env.NODE_ENV || 'development',
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
    user_id  : {type : String}

});



Article.belongsTo(User, {as: 'user', foreignKey: 'user_id'});


Article.load = function (id, cb) {
  this.find(id, cb);
}

// schema.model('Article', ArticleSchema);

module.exports = schema.models.Article;
