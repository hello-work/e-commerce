// TODO : import db modules

//Get all the carts
exports.getCarts = async(req,res)=>{

    try {
        // TODO : database call
        let carts;
        
        if(!carts) {
            res.status(404).send({msg:'Sorry, there are no carts !',  data:null})
        }

        res.status(200).send({msg:'Successful',  data:carts})
        
    }catch (err) {
        res.status(500).send({msg:'Internal Server Error',  err : err.message})     
    }
   
}


//Create New cart
exports.addCart = async(req,res)=>{

    // destructure the data according to carts schema
    const { data } = req.body;

    try {
        // TODO : database call
        let cart;

        if(!cart) {
            res.status(400).send({msg:'carts not created', data: null})    
        }

        res.status(200).send({msg:'Successful',  data:cart})
        
    }catch (err) {
        res.status(500).send({msg:'Internal Server Error',  err : err.message})     
    }
    
}


// get cart
exports.getCart = async(req,res)=>{
    const { id } = req.params;
   
    try {
        // TODO : database call
        let cart;

        if(!cart) {
            res.status(404).send({msg:'cart Not Found',  data:null})
        }

        res.status(200).send({msg:'Successful',  data:cart})
        
    }catch (err) {
        res.status(500).send({msg:'Internal Server Error',  err : err.message})     
    }

}


// update cart
exports.updateCart = async(req,res)=>{
    const {data} = req.body
    const {id} = req.params

    try {
        // TODO : database call
        let cart;
if(!cart){
   res.status(404).send({msg:'cart Not Found',  data:null})
   }
        res.status(200).send({msg:'Successful',  data:cart})
        
    }catch (err) {
        res.status(500).send({msg:'Unsuccessful',  err : err.message})     
    }
}


//Delete Section
exports.deleteCart = async(req,res)=>{
    const {id} = req.params

    try {
        // TODO : database call
        let cart;
if(!cart){
   res.status(404).send({msg:'cart Not Found',  data:null})
 }
        res.status(200).send({msg:'Successful'})
        
    }catch (err) {
        res.status(400).send({msg:'Unsuccessful',  err : err.message})     
    }

}
