const serviceCrown2Controller_82 = require('./serviceCrown2Controller_82');

exports.getCategories =async (req,res)=>{
    try{
        const data = await serviceCrown2Controller_82.getCategories();
        return res.json(data);

    }catch(err){
        console.log('crown2Controller getCategories',err)
    }

}