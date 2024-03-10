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
        await client.set("choosePoint", value);
          return NextResponse.json({data},{success : true}, {status : 200})
        }
        else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
    }else{ 
     const value = await JSON.parse(redisdata)
     return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}


export async  function POST(req){
    const {name, phone, course, email} = await req.json();

    const findCource =   `Select name from jtc_courses WHERE id = ${course}`
    const getCourceQuery = await executeQuery(findCource)
    if(getCourceQuery.length == 0) return  NextResponse.json({message : "Cource Not Found"},{success : false}, {status : 206})
    const  query =  `Insert into jtc_enquiry_form SET name = "${name}", email = "${email}" , phone_number = "${phone}", cource =  "${course}", form_id = '1'`
        const insertData = await executeQuery(query);
    if(insertData.affectedRows >  0){
        const courceName = getCourceQuery[0].name

        const message = `${name} Just fill the Get In Touch form. His Phone No. ${phone} and the Seleted Course is ${courceName}` 
        const subject = "Get In Touch"
        const options = {message, subject};
       await sendEmail(options)
   return NextResponse.json({message : "Form Submited Successfully", notification : message, success : true}, {status : 200})
    }
    else return NextResponse.json({message : "Form Submition Issue"},{success : false}, {status : 206})
}


export async  function PUT(req){
    const {name, phone, id,email} = await req.json()
    const findCource =  `Select TIME_FORMAT(time_to, '%h:%i %p') as time_to,TIME_FORMAT(time_from, '%h:%i %p') as time_from, Date_Format(date, '%d-%M-%y') as date,cource_id, week_days from jtc_batches WHERE deleted_by = '0' && id = ${id}`
    const getCourceQuery = await executeQuery(findCource)
       if(getCourceQuery.length == 0) return  NextResponse.json({message : "Batch Not Found"},{success : false}, {status : 206})
          const courceId = getCourceQuery[0].cource_id
          const query = `Insert into jtc_enquiry_form SET batch=${id},name = "${name}", email = "${email}" , phone_number = "${phone}", cource =  "${courceId}", form_id = '4'`
          const data = await executeQuery(query);
          if(data.affectedRows > 0) {
            const {week_days, time_to, time_from, date} = getCourceQuery[0]
            const message =  `${name} is selected ${week_days} Batch at ${date}. The Batch timming is ${time_to} - ${time_from}. His Phone Number is ${phone}.` 
            const subject = "Batch Enroll"
            const options = {message, subject};
           await sendEmail(options)
           return NextResponse.json({message : "Form Submited Successfully", notification : message, success : true}, {status : 200})
          }
          else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
}


export async  function PATCH(req){
    const {name, phone, role,  email} = await req.json();
    const findRole =   `Select role from jtc_roles WHERE id = '${role}'`

    const getRoleQuery = await executeQuery(findRole)
    if(getRoleQuery.length == 0) return  NextResponse.json({message : "Cource Not Found"},{success : false}, {status : 206})

    const  query =  `Insert into jtc_enquiry_form SET cource = "${role}",name = "${name}", email = "${email}" , phone_number = "${phone}",  form_id = '3'`
    const insertData = await executeQuery(query);
    if(insertData.affectedRows >  0){
        const roleName = getRoleQuery[0].role
     
        const message = `A new Job Application Recived  for ${roleName} role.Name is ${name} and  phone No. is ${phone}` 
        const subject = "Join Us Form"
        const options = {message, subject};
       await sendEmail(options)
       return NextResponse.json({message : "Form Submited Successfully", notification : message, success : true}, {status : 200})

    }
    else return NextResponse.json({message : "Form Submition Issue"},{success : false}, {status : 206})
}

