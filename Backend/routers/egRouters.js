const express=require('express');
const router=express.Router();
const { getRoute, postRoute, putRoute, deleteRoute, getRouteById, signupRoute, loginRoute } = require('../controllers/egControllers');
router.get('/get', getRoute);
router.get('/get/:id', getRouteById);
router.post('/signup', signupRoute);
router.post('/login',loginRoute);
router.put('/put/:id', putRoute);
router.delete('/delete/:id', deleteRoute);
module.exports=router