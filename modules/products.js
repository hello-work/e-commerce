// TODO : import db modules
exports.getProducts = async(req,res)=>{
    const { name, price } = req.body

    // TODO : database call
    let products;
    

    res.status(200).send({msg:'Successful',  data:products})
}

exports.addProducts = async(req,res)=>{
    const {email, password} = req.body

    // TODO : database call
    let product;
    

    res.status(200).send({msg:'Successful',  data:product})
}

exports.updateProducts = async(req,res)=>{
    const {email, password} = req.body
    const {id} = req.params

    // TODO : database call
    let product;
    

    res.status(200).send({msg:'Successful',  data:product})
}

exports.deleteProducts = async(req,res)=>{
    const {email, password} = req.body
    const {id} = req.params

    // TODO : database call
    let product;
    

    res.status(200).send({msg:'Successful',  data:product})
}
