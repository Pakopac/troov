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
],

module.exports.modify = [
    function(req,res){

        fs.readFile('./static/animes.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            obj = JSON.parse(data);
            var json = {
                "id": req.body.id,
                "title": req.body.name,
                "image_url": req.body.image_url,
                "genres": [
                    req.body.genre1,
                    req.body.genre2,
                  ],
                "rating": req.body.rating,
            };

            for(var i = 0; i<obj.length; i++){
                if(obj[i].id === parseInt(req.body.id)){
                    obj[i] = json
                }
              }
            json = JSON.stringify(obj); 
            return fs.writeFile('./static/animes.json', json, 'utf8', (err) => {
                if (err){
                    console.log(err);
                } else {
                    return res.json({"response": "Modified"})
                }
            });
        }});
    }
],

module.exports.delete = [
    function(req,res){

        fs.readFile('./static/animes.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            obj = JSON.parse(data);

            var filtered = obj.filter(function(item) { 
                return item.id !== parseInt(req.body.id);  
             });
            json = JSON.stringify(filtered); 
            return fs.writeFile('./static/animes.json', json, 'utf8', (err) => {
                if (err){
                    console.log(err);
                } else {
                    return res.json({"response": "Deleted"})
                }
            });
        }});
    }
]