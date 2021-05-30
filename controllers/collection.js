const Collections = require('../models/collections');

function test(req, res){
    res.send('Test');
}



function liker(req, res){
    Collections.findByIdAndUpdate(req.params.id, {$inc:{likes:1}}, function(err){
        if(err) throw err;
        res.send('a Like Added')
    })
}

function createin(req, res){
    var people = new Collections({
        name: req.body.name,
        likes: req.body.likes
    })
    people.save(function (err){
        if(err) throw (err);
        res.send('Person added')
    });
}

function detailsin(req, res){
    Collections.findById(req.params.id, function(err, pop){
        if(err) throw (err);
        res.send(pop);
    })
}

function updatein(req, res){
    Collections.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err){
        if(err) throw (err);
        res.send('Detail updated')
    });
}

function deletein(req, res){
    Collections.findByIdandRemove(req.params.id, function(err){
        if(err) throw (err)
        res.send('Details Deleted');
    })

}


module.exports = {
    test,
    deletein,
    updatein,
    liker,
    createin,
    detailsin
}
