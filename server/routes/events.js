const router = require('express-promise-router')();
const eventsController = require('../controller/events');

router
  .route('/')
  .get(eventsController.getEvents);

module.exports = router;
