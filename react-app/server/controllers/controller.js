const data = require("../data");

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },

    getSources: (req, res) => {
                  //key      //response             //an attribute of our response
        res.json({"message": "We got your sources!", data: data.sources});
    },

    deleteSource: (req, res) => {
        //specifying the condition under which we filter
        data.sources = data.sources.filter(sourceToDelete => sourceToDelete.id !== req.params.id);
        res.json({"message": "Source deleted!", data: data.sources});
    },

    addSource: (req, res) => {
        //refs our data //.push = adding to our data 
        data.sources.push(req.body.source); // () = this is something we grab from user input
        res.json({"message": "Source added!", data: data.sources});
    }
};

