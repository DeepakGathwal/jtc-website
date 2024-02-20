import instance from "./commonapi";

let choosePoint = "choosePoint"
let cources = "cources"
let company = "company"


export const allChoosingPoint = async () => {
  try{
    const { data } = await instance.get(choosePoint);
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




export const joinUsForm = async (field) => {
  try{
    const { data } = await instance.post(choosePoint, {email : field.email, name : field.name, phone : field.phone, cource : field.cource});
    return data;

  }catch(err){
    return err
  }
};




