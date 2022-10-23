// TODO : import db modules

//Get all the sections
exports.getSections = async(req,res)=>{

    try {
        // TODO : database call
        let sections;
        
        if(!sections) {
            res.status(404).send({msg:'Sorry, there are no sections !',  data:null})
        }

        res.status(200).send({msg:'Successful',  data:sections})
        
    }catch (err) {
        res.status(500).send({msg:'Internal Server Error',  err : err.message})     
    }
   
}


//Create New Sections
exports.addSections = async(req,res)=>{

    //Destructure the data according to Sections schema
    const {data} = req.body;

    try {
        // TODO : database call
        let section;

        if(!section) {
            res.status(400).send({msg:'Sections not created', data: null})    
        }

        res.status(200).send({msg:'Successful',  data:section})
        
    }catch (err) {
        res.status(500).send({msg:'Internal Server Error',  err : err.message})     
    }
    
}


//Get Section
exports.getSection = async(req,res)=>{
    const {id} = req.params;
   
    try {
        // TODO : database call
        let section;

        if(!section) {
            res.status(404).send({msg:'Section Not Found',  data:null})
        }

        res.status(200).send({msg:'Successful',  data:section})
        
    }catch (err) {
        res.status(500).send({msg:'Internal Server Error',  err : err.message})     
    }

}


//Update Section
exports.updateSection = async(req,res)=>{
    const {data} = req.body
    const {id} = req.params

    try {
        // TODO : database call
        let section;

        res.status(200).send({msg:'Successful',  data:section})
        
    }catch (err) {
        res.status(400).send({msg:'Unsuccessful',  err : err.message})     
    }
}


//Delete Section
exports.deleteSection = async(req,res)=>{
    const {id} = req.params

    try {
        // TODO : database call
        let section;

        res.status(200).send({msg:'Successful'})
        
    }catch (err) {
        res.status(400).send({msg:'Unsuccessful',  err : err.message})     
    }

}
