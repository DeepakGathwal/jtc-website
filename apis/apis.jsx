import instance from "./commonapi";

let choosePoint = "choosePoint"
let cources = "cources"
let courseSections = "courseSections"
let company = "company"
let testimonials = "testimonials"
let footer = "footer"
let blog = "blog"
let about = "about"
let terms = "terms"


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
export const homeCources = async () => {
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




export const joinUsForm = async (field) => {
  try{
    const { data } = await instance.post(choosePoint, {email : field.email, name : field.name, phone : field.phone, cource : field.cource});
    return data;

  }catch(err){
    return err
  }
};





export const allCourceCategory = async () => {
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
    const {data}  = await instance.patch(courseSections,value );
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




