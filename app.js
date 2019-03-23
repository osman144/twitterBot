var Twitter = require('twitter')
var config = require('./config.js')

// Pass configuration details in to twitter, create new class instance of twitter
var twitterBot = new Twitter(config)

// Create and set up search params
var params = {
    q: '#nodejs',
    count: 2,
    result_type: 'recent',
    lang: 'en'
}

twitterBot.get('search/tweets', params, function(err, data, response){
    if(!err){
        for(let i=0; i<data.statuses.length;i++){
            // Get the tweet ID returned from the returned data
            let id = { id: data.statuses[i].id_str }
            // Try to favorite the selected tweet
            twitterBot.post('favorites/create', id, function(error, response){
                // If favorite fails and bot unable to favorite message, log error message
                if(error){
                    console.log(error[0].message)
                } 
                // If bot able to favorite tweet and is successful, log the favorited tweet
                else {
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
                }
            })
        }
    } else {
        console.log(err)
    }
})