var Twitter = require('twitter')
var config = reqiure('./config.js')

// Pass configuration details in to twitter, create new class instance of twitter
var twitterBot = new Twitter(config)

// Create and set up search params
var params = {
    q: '#ixora',
    count: 2,
    result_type: 'recent',
    lang: 'en'
}

twitterBot.get('search/tweets', params, function(err, data, response){
    if(!err){
        console.log(res)
    } else {
        console.log(err)
    }
})