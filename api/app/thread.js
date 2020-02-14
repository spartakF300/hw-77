const express = require('express');
const router = express.Router();
const fileDb = require('../fileDb');
const multer = require("multer");
const path = require('path');
const config = require('../config');
const nanoid = require("nanoid");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});


router.get('/', async (req, res) => {
    const threads = await fileDb.getItems();
    res.send(threads)
});

router.post('/', upload.single('image'), async (req, res) => {
    if (!req.body.message) {
        return res.status(404).send({message: 'Error'})
    }
    const thread = req.body;
    if (req.file) {
        thread.image = req.file.filename
    }
    if (!req.body.author) {
        thread.author = 'Anonymous'
    }
    await fileDb.addItem(thread);
    res.send(thread.id)
});


module.exports = router;