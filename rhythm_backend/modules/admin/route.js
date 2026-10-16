const express=require("express");
const router= express.Router();
const {Createenquiry,Deleteenquiry, createmultimedia, deletemultimedia}=require("./controller.js");
const upload=require("../../middleware/upload.js");


router.post("/createenquiry",Createenquiry);
router.delete("/deleteenquiry/:id",Deleteenquiry);

//route for multimedia

router.post("/",upload.fields
    ([{name:"images",maxCount:5},
        {name:"video",maxCount:1}
    ]),
    createmultimedia
);

router.delete("/:id",deletemultimedia);

module.exports= router;