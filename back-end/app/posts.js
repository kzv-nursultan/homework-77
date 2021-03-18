const path = require('path');
const express = require('express');
const multer = require('multer');
const { nanoid } = require('nanoid');
const fileDb = require('../fileDb');
const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/',(req,res)=>{
    const data = fileDb.getItems();
    res.send(data);
});

router.post('/', upload.single('image'), (req,res)=>{
    const item = req.body;

    if(item.message){
        if(!item.author){
            item.author = "Anonymous";
        };
        if(item.image !=='[object Object]'){
            console.log(item.image);
            item.image = req.file.filename;
        };
        fileDb.addItem(item);
        res.send(item);
    } else if (!item.message){
        res.status(400).send('something went wrong!')
    };

});

module.exports = router;