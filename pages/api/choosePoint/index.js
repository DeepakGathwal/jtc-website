import { executeQuery } from "@/conn/conn";
import catchError from "@/middelware/catchError";
import { sendEmail } from "@/middelware/sendEmail";

import { client } from "@/utils/redisFile";



export default async function handler(req, res) {
    const method = req.method
    switch (method) {
        case 'GET':  await choosePoint(req, res);
            break;
        case 'POST':  await getInTouch(req, res);
            break;
        default: return res.status(405).end(`Method ${method} Not Allowed`);
    }
}





// Get All Chossing Point
export const choosePoint = catchError(async(req,res) =>{
    const redisdata = await client.get("choosePoint");
    if(!redisdata){
        const query =  `Select point from jtc_choosing_point `
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value = await JSON.stringify(data)
        await client.set("choosePoint", value, {
            EX: 1000,   
            NX: true
          });
          return res.status(200).json({data, success : true})
        }
        else return res.status(200).json({message : "Data Empty", success : false})
    }else{ 
     const value = await JSON.parse(redisdata)
     return res.status(200).json({data : value, success : true})
}
})


export const getInTouch = catchError(async(req,res) => {
    const {name, phone, cource, email} = req.body
    const  query =  `Insert into jtc_enquiry_form SET name = '${name}', email = '${email}' , phone_number = '${phone}', cource = (SELECT id from jtc_cources WHERE name = '${cource}'), form_id = '1'`
    const insertData = await executeQuery(query);
    if(insertData.affectedRows >  0){
        const message = `${name} Just fill the Get In Touch form. His Phone No. ${phone}. The Seleted Cource is ${cource}` 
        const subject = "Get In Touch"
        const options = {message, subject};
       await sendEmail(options)
    return res.status(200).json({message : "Form Submited Successfully", success : true})}
    else  return res.status(200).json({message : "Form Submition Issue", success : false})
})