const ex=require("express");
const { route } = require("express/lib/application");

const router =ex.Router();

///Creating the routers

router.get("/",(req, res)=>{
    res.send("Here is your courses")
});

module.exports=router;
