const Category_82 = require('../models/Category_82');

experts.getCategories = async(req,res)=>{
try{
    return await Category_82.fetchAll();
}catch(err){
    console.log('getCategories',err);
}

}