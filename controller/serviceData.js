const figmas = require('../database/data')

    async function getServiceData(nm){

console.log(nm)
    const data =  await  figmas.find({ name: { $regex: new RegExp(nm, "i") } })
    return data


    }

    module.exports = getServiceData