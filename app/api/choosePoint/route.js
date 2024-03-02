import { executeQuery } from "@/conn/conn";
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
    const {name, phone, cource, email} = await req.json();
    const  query =  `Insert into jtc_enquiry_form SET name = "'${name}'", email = "'${email}'" , phone_number = "'${phone}'", cource =  "'${cource}'", form_id = '1'`
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


export async  function PUT(req){
    const {name, phone, cource, email} = await req.json();
    const findCource =   `Select name from jtc_courses WHERE id = ${id}`
    const getCourceQuery = await executeQuery(findCource)
    if(getCourceQuery.length == 0) return  NextResponse.json({message : "Cource Not Found"},{success : false}, {status : 206})
    const  query =  `Insert into jtc_enquiry_form SET name = "'${name}'", email = "'${email}'" , phone_number = "'${phone}'", cource =  "'${cource}'", form_id = '1'`
    const insertData = await executeQuery(query);
    if(insertData.affectedRows >  0){
        const courceName = getCourceQuery[0].name
        const message = `${name} Just fill the Get In Touch form. His Phone No. ${phone}. The Seleted Cource is ${courceName}` 
        const subject = "Get In Touch"
        const options = {message, subject};
       await sendEmail(options)
   return NextResponse.json({message : "Form Submited Successfully"},{success : true}, {status : 200})
    }
    else return NextResponse.json({message : "Form Submition Issue"},{success : false}, {status : 206})
}


export async  function PATCH(req){
    const {name, phone, role,  email} = await req.json();
    const findRole =   `Select role from jtc_roles WHERE id = '${role}'`

    const getRoleQuery = await executeQuery(findRole)
    if(getRoleQuery.length == 0) return  NextResponse.json({message : "Cource Not Found"},{success : false}, {status : 206})

    const  query =  `Insert into jtc_enquiry_form SET cource = "'${role}'",name = "'${name}'", email = "'${email}'" , phone_number = "'${phone}'",  form_id = '3'`
    const insertData = await executeQuery(query);
    if(insertData.affectedRows >  0){
        const roleName = getRoleQuery[0].role
     
        const message = `A new Job Application Recived name ${name} and Phone Number ${phone} from ${roleName} role` 
        const subject = "Join Us Form"
        const options = {message, subject};
       await sendEmail(options)
   return NextResponse.json({message : "Form Submited Successfully"},{success : true}, {status : 200})
    }
    else return NextResponse.json({message : "Form Submition Issue"},{success : false}, {status : 206})
}

