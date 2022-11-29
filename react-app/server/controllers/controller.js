const data = require("../data");
const sources= require('../models/SourceModel');

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },

    getSources: (req, res) => {
        //key      //response             //an attribute of our response
        res.json({"message": "We got your sources!", data: data.sources});
        sources.find({}) //find all sources
        .then(sourceData => {
            console.log(sourceData); //print them all out
            res.json({"message": "OK", data: sourceData});
        }) // after you find the sources, re
        .catch(err => { //try catch
            console.log(err); //print the error
            res.json(err);
        });
    },

    deleteSource: (req, res) => {
       sources.findOneAndDelete({id:req.params.id})
       .then(sourceData => {
            console.log(sourceData);
            res.json({"message": "OK", data: sourceData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },

    addSource: (req, res) => {
        sources.create(req.body.source)
        .then(sourceData => {
            console.log(sourceData);
            res.json({"message": "OK", data: sourceData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    }
};
