import { escapeRequestBody, executeQuery } from "@/conn/conn";
import catchError from "@/middelware/catchError";
import { sendEmail } from "@/middelware/sendEmail";
import { NextResponse } from "next/server";
import { client } from "@/middelware/redisFile";



// // Get All Chossing Point
export async  function GET(req){
    const redisdata = await client.get("choosePoint");
    if(!redisdata){
        const query =  `Select point from jtc_choosing_point `
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value = await JSON.stringify(data)
        await client.set("choosePoint", value, {
            EX: process.env.REDIS_EXP,   
            NX: true
          });
          return NextResponse.json({data},{success : true}, {status : 200})
        }
        else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
    }else{ 
     const value = await JSON.parse(redisdata)
     return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}


export async  function POST(req){
    const {name, phone, cource, email} = req.body
    const  query =  `Insert into jtc_enquiry_form SET name = ${name}, email = ${email} , phone_number = ${phone}, cource = (SELECT id from jtc_courses WHERE name = ${cource}), form_id = '1'`
    const insertData = await executeQuery(query);
    if(insertData.affectedRows >  0){
        const message = `${name} Just fill the Get In Touch form. His Phone No. ${phone}. The Seleted Cource is ${cource}` 
        const subject = "Get In Touch"
        const options = {message, subject};
       await sendEmail(options)
   return NextResponse.json({message : "Form Submited Successfully"},{success : true}, {status : 200})
    }
    else return NextResponse.json({message : "Form Submition Issue"},{success : false}, {status : 206})
}