TODO : import db modules
    const {email, password} = req.body

    // TODO : database call
    let user;
    if(!user){
        res.status(404).send({msg:'No user found', data:null})
    }

    res.status(200).send({msg:'Successful',  data:user})
}

exports.register = async(req,res)=>{
    const {email, password} = req.body

    // TODO : create user
    let user;
    if(!user){
        res.status(404).send({msg:'No user found', data:null})
    }

    res.status(200).send({msg:'Successful',  data:user})
}