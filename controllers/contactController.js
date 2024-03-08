const asyncHandler = require("express-async-handler");
const Contact= require("../models/contactModel");

//@desc Get all contacts
//@route Get /contacts 
const getAllContacts= asyncHandler(async (req,res)=>{
  const contacts = await Contact.find()
  //res.status(200).render("getAll",{heading:"User List",contacts: contacts})

  res.render("index", {contacts:contacts})
});

//@desc view add contacts form
//@route Get /contacts/add 
const addContactForm = (req, res) => {
  res.render("add")
} 


//@desc create a contacts
//@route POST /contacts/add 
const createContact= asyncHandler(async (req,res)=>{
  const {name, email, phone} = req.body;
  if(!name || !email || !phone){
    return res.status(400).send("필수값이 없다.")
  }
  const contact = await Contact.create({name,email,phone})
  //res.status(201).send("Create contacts");
  res.redirect("/contacts")
})

//@desc get a contacts
//@route Get /contacts/:id
const getContact= asyncHandler(async(req,res)=>{
  const contact= await Contact.findById(req.params.id);
  //res.status(200).send(contact);
  res.render("update",{contact:contact})
});

//@desc put a contacts
//@route PUT /contacts/:id
const updateContact= asyncHandler(async(req,res)=>{
  const id=req.params.id;
  const {name, email, phone} = req.body;
  const contact =await Contact.findById(id);
  if(!contact){
    res.status(404);
    throw new Error("연락처가 없습니다.")
  }
  contact.name = name;
  contact.email = email;
  contact.phone = phone;
  contact.save();
  //res.status(200).send(`update for id: ${req.params.id}`)
  res.redirect("/contacts")
});

//@desc delete a contacts
//@route DELETE /contacts/:id
const deletContact= asyncHandler(async(req,res)=>{
  const id= req.params.id;
  const contact = await Contact.findByIdAndDelete(id);
  //res.status(200).send(`delete: ${req.params.id}`)
  res.redirect("/contacts")
});

module.exports = {getAllContacts, createContact, getContact, updateContact, deletContact, addContactForm};