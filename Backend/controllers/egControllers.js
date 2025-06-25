const { response } = require("express");
const user = require("../models/userModel");
const bcrypt=require('bcrypt')
exports.getRoute= async (req, res) => {
    const userData=await user.find();
    res.status(201).json({data:userData})
    res.send('Get Route is working!');
}
exports.getRouteById= async (req, res) => {
    const userData=await user.findById(req.params.id);
    res.status(201).json({userData})
}
exports.loginRoute= async (req, res) => {
  const {username,password}= req.body;
  const userData=await user.findOne({username});
  if(!userData) return res.status(401).json({
    message:"User Not Found"
  })
  const valid= await bcrypt.compare(password,userData.password);
  if(valid) res.status(201).json("Login Successful")
  res.status(401).json("Password Invalid")
}
exports.signupRoute= async (req, res) => {
  const {username,password}= req.body;
  const exist=await user.findOne({username});
  if(exist) return res.status(401).json({
    message:"User already exist"
  })
  const hashedPassword=await bcrypt.hash(password,10)
  const newUser = new user({username,password:hashedPassword})
  await newUser.save();
  res.status(201).json({user:newUser})
}
exports.putRoute= async (req, res) => {
  const {usename,password}=req.body;
  const update=await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
  if(!update) return res.status(401).json({message:"User not exist"})
  res.status(201).json({update})
}
exports.deleteRoute=async(req, res) => {
  const deleteData=await user.findByIdAndDelete(req.params.id);
  if(!deleteData) return res.status(401).json({message:"User not exist"})
  res.status(201).json({message:"Deleted Successfully"})
}