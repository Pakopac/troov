var fs = require('fs');

module.exports.add = [
    function(req,res){
        var json = {
            "title": req.body.name,
            "image_url": req.body.image_url,
            "genres": [
                req.body.genre1,
                req.body.genre2,
              ],
            "rating": req.body.rating,
        };

        fs.readFile('./static/animes.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            obj = JSON.parse(data);
            obj.push(json);
            json = JSON.stringify(obj); 
            return fs.writeFile('./static/animes.json', json, 'utf8', (err) => {
                if (err){
                    console.log(err);
                } else {
                    return res.json({"response": "Added"})
                }
            });
        }});
    }
]