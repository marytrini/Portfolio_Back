const express = require('express');
const {createMessage, getMessage} = require('../controllers/contactController');

const router = express.Router();


router.get("/", getMessage);
router.post("/", createMessage);

module.exports = router;