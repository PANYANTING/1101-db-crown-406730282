const serviceCrown2Controller_82 = require('./serviceCrown2Controller_82');

exports.getCategories =async (req,res)=>{
    try{
        let results = await serviceCrown2Controller_82.getCategories();
        console.log('results',JSON.stringify(results));
        res.render('crown_82', { 
            data: results,
            title:'Crown2_82',
            name:'YANTING PAN',
            id:`406730282`
        });
        

    }catch(err){
        console.log('crown2Controller getCategories',err)
    }

}