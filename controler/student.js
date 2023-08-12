const {database}=require('../db')
const customer_data=database.collection("employee")
// const array=[]
// const addData=async(req,res)=>{
//      const data=req.body;
//      const result=await customer_data.insertOne(data)
//      // result.push(data) 
//      res.send({"msg":result})
// }

// const addMany=async(req,res)=>{
//      const data=req.body;
//      const result=await customer_data.insertMany(data)
//      // result.push(data) 
//      res.send({"msg":result})
// }



// 1.list of all data
const fetchData=async(req,res)=>{
     const data=req.body;
     const result=await customer_data.find().toArray()
     // result.push(data) 
     res.send({"msg":result})
}


//2.rangeing of data
const range=async(req,res)=>{
     const data=req.body;
     const result=await customer_data.find({"salary":{"$gt":"30000"}}).toArray()
     // result.push(data) 
     res.send({"msg":result})
}
//3.find experience
const exp=async(req,res)=>{
     const data=req.body;
     const result=await customer_data.find({"overallExp":{"$gt":"2"}}).toArray()
     // result.push(data) 
     res.send({"msg":result})
}

//4.graduate year
const gra_year=async(req,res)=>{
     const data=req.body;
     const result=await customer_data.find({"yearGrad":{"$gt":"2015"},"overallExp":{"$gt":"1"}}).toArray()
     // result.push(data) 
     res.send({"msg":result})
}

//5.update salary
const Update_salary=async(req,res)=>{
     const data=req.body;
     const result=await customer_data.updateMany({"salary":{"$gt":"70000"}},{$set:{"salary":"65000"}})
     // result.push(data) 
     res.send({"msg":result})
}

//6.delete
const delete_data=async(req,res)=>{
     const data=req.body;
     const result=await customer_data.deleteMany({"lastCompany":"Y"})
     // result.push(data) 
     res.send({"msg":result})
}



// module.exports={addData,addMany,fetchData,range}
module.exports={fetchData,range,exp,gra_year,Update_salary,delete_data}