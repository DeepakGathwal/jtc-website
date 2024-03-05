
import instance from "./commonapi";
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8000/');

let choosePoint = "choosePoint"
let cources = "cources"
let courseSections = "courseSections"
let company = "company"
let testimonials = "testimonials"
let footer = "footer"
let blog = "blog"
let about = "about"
let navbar = "navbar"
let tutorial = "tutorial"

export const blogs = async () => {
  try{
    const { data } = await instance.get(blog);
    return data;

  }catch(err){
    return err
  }
};

export const singleBlog = async (id) => {
  try{
    const { data } = await instance.get(id);
    return data;

  }catch(err){
    return err
  }
};

export const allChoosingPoint = async () => {
  try{
    const { data } = await instance.get(choosePoint);
    return data;

  }catch(err){
    return err
  }
};


export const footerData = async () => {
  try{
    const { data } = await instance.get(footer);
    return data;

  }catch(err){
    return err
  }
};




export const alltestimonials = async () => {
  try{
    const { data } = await instance.get(testimonials);
    return data;

  }catch(err){
    return err
  }
};
export const homeCourses = async () => {
  try{
    const { data } = await instance.get(cources);
    return data;

  }catch(err){
    return err
  }
};





export const homeCompany = async () => {
  try{
    const { data } = await instance.get(company);
    return data;

  }catch(err){
    return err
  }
};


export const aboutUS = async () => {
  try{
    const { data } = await instance.get(about);
    return data;

  }catch(err){
    return err
  }
};




export const enquiryForm = async (field) => {
  try{
   
    const value = await JSON.stringify(field)
    const { data } = await instance.post(choosePoint, value);
   await socket.emit('formSubmited',data)
    return data;

  }catch(err){
    return err
  }
};


export const hireUsForm = async (field) => {
  try{
    const value = await JSON.stringify(field)
    const { data } = await instance.patch(company, value);
  await  socket.emit('formSubmited',data)
    return data;
  }catch(err){
    return err
  }
};


export const joinUsForm = async (field) => {
  try{
    const value = await JSON.stringify(field)
    const { data } = await instance.patch(choosePoint, value);
   await socket.emit('formSubmited',data)
    return data;
  }catch(err){
    return err
  }
};


export const batchForm = async (field) => {
  try{
    const value = await JSON.stringify(field)
    const { data } = await instance.put(choosePoint, value);
  await  socket.emit('formSubmited',data)
    return data;
  }catch(err){
    return err
  }
};



export const allRoles = async (field) => {
  try{
    const { data } = await instance.get(courseSections);
    return data;
  }catch(err){
    return err
  }
};





export const allCourceTypes = async () => {
  try{
    const  {data}  = await instance.patch(cources);
 
    return data;

  }catch(err){
    return err
  }
};


export const termsAndCondition = async (id) => {
  try{
    const {data}  = await instance.patch(id);
    return data;
  }catch(err){
    return err
  }
};


export const courcesList = async (id) => {
  try{
    const value = JSON.stringify({id})
    const {data}  = await instance.put(cources, value);
    return data;
  }catch(err){
    return err
  }
};


export const courseData = async (name) => {
  try{
    const value = JSON.stringify({name})
    const {data}  = await instance.post(cources, value);
    return data;
  }catch(err){
    return err
  }
};


export const coursePoint = async (course) => {
  try{
    const value = JSON.stringify({course})
    const {data}  = await instance.put(courseSections,value );
    return data;
  }catch(err){
    return err
  }
};


export const courceViodePoint = async (course) => {
  try{
    const value = JSON.stringify({course})
    const {data}  = await instance.patch(about,value );
    return data;
  }catch(err){
    return err
  }
};


export const allBatches = async (course) => {
  try{
    const value = JSON.stringify({course})
    const {data}  = await instance.post(courseSections,value );
    return data;
  }catch(err){
    return err
  }
};


export const courseCatgories = async (id) => {
  try{
    const {data}  = await instance.post(id);
    return data;
  }catch(err){
    return err
  }
};

export const courseChapter = async (id) => {
  try{
    const value = JSON.stringify({id})
    const {data}  = await instance.patch(courseSections, value);
    return data;
  }catch(err){
    return err
  }
};


export const courseFaqs = async (course) => {
  try{
    const value = JSON.stringify({course})
    const {data}  = await instance.post(about, value);
    return data;
  }catch(err){
    return err
  }
};


export const allNavbarLinks = async () => {
  try{   
    const {data}  = await instance.get(navbar);
    return data;
  }catch(err){
    return err
  }
};




export const tutorialType = async () => {
  try{   
    const {data}  = await instance.get(tutorial);
    return data;
  }catch(err){
    return err
  }
};


export const tutorialCourse = async (type) => {
  try{
    const value = JSON.stringify({type})
    const {data}  = await instance.post(tutorial, value);
    return data;
  }catch(err){
    return err
  }
};

