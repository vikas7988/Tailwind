const figmas = require('../database/data')

    async function getServiceData(nm){

console.log(nm)
    const data =  await  figmas.find({ name: { $regex: new RegExp(nm, "i") } })
    return data


    }
    async function getNameData(){

       const myId =  Math.floor(Math.random() * 10) + 1
       console.log(myId)
    const data =  await  figmas.aggregate([{ $sample: { size: myId } }]);

    const myData = await data.map((el)=>(el.name))

    return myData


    }

    module.exports = {getServiceData, getNameData}