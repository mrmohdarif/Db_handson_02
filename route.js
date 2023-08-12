// const {addData,addMany,fetchData,range}=require('./controler/student')
const {fetchData,range,exp,gra_year,Update_salary,delete_data}=require('./controler/student')
const router=require('express').Router()

// router.post('/addData',addData)
// router.post('/addMany',addMany)
router.get('/fetchData',fetchData)
router.get('/range',range)
router.get('/exp',exp)
router.get('/gra_year',gra_year)
router.get('/Update_salary',Update_salary)
router.get('/delete_data',delete_data)

module.exports={router}