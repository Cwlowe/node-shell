const request = require('request');

module.exports= (cmd,done)=> {
    if(cmd.includes("curl")){
        const url = cmd.split(" ")[1];
        request(url, function(error, response, body){
            console.error(error);
            // console.log(response && response.statusCode);
            done(body);
        })
    }
};