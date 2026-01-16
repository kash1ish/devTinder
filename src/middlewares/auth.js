const adminAuth = (req,res,next)=>{
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        res.status(500).send("you are not authorized");
    }
    else{
        next();
    }
}

const userAuth = (req,res,next)=>{
    const token = "user";
    const isUserAuthorized = token === "user";
    if(!isUserAuthorized){
        res.status(500).send("user not authorized");
    }
    else{
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}