const controllers = require('../controllers/controller.js');
const router = require('express').Router();
//how we define a new route("url") this will trigger a get request (logic inside controllers.hello)
//Here we specify endpoints. We define the logic of that request in a different file.
router.route("/hello").get(controllers.hello);

router.route("/api/sources").get(controllers.getSources); //sources is the name of our endpoint
router.route("/api/add_sources").post(controllers.addSource); //addSource is the name of our endpoint
router.route("/api/delete_source/:id").post(controllers.deleteSource); //deleteSource is the name of our endpoint

module.exports = router;