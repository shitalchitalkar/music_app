const multer =require ("multer");
const path = require("path");

const storage =multer.diskStorage({

    destination:(req,file,cb)=>{
        (cb,".upload/");
},

filename:(req,file,cd)=>{

    const uniqueName=Date.now+"-"+ orignalname;
    cb(null, uniqueName);
}
});

const upload=multer({storage:storage});

module.exports=upload;