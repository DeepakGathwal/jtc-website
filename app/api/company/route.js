import { executeQuery } from "@/conn/conn";
import { client } from "@/middelware/redisFile";
import { NextResponse } from "next/server";
import { sendEmail } from "@/middelware/sendEmail";
import fs from 'fs';
import * as path from 'path';


// Get All Chossing Point
export async  function GET(req){
    const redisdata = await client.get("company");
    if(!redisdata){
        const query =  `Select name, icon, link from jtc_companies WHERE deleted_by = '0' `
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value =  await JSON.stringify(data)
        await client.set("company", value);
          return NextResponse.json({data},{success : true}, {status : 200})
        }
        else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
    }else{ 
     const value = await JSON.parse(redisdata)
     return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}


export async  function PATCH(req){
  const {name, phone, company, course, desigination,  email} = await req.json();
  const findCource =   `Select name from jtc_courses WHERE id = ${course}`
  const getCourceQuery = await executeQuery(findCource)
  if(getCourceQuery.length == 0) return  NextResponse.json({message : "Cource Not Found"},{success : false}, {status : 206})
   const  query =  `Insert into jtc_enquiry_form SET cource = "${course}",desigination = "${desigination}",company = "${company}",name = "${name}", email = "${email}" , phone_number = "${phone}",  form_id = '2'`

   const insertData = await executeQuery(query);
  if(insertData.affectedRows >  0){
    const courceName = getCourceQuery[0].name

      const message = `${company} Just fill the Hire From Us form. His Phone No. ${phone}.Company Email id ${email} Phone Number is ${phone}. ${company} want hiring for ${courceName}` 
      const subject = "Hire From Us"
      const options = {message, subject};
     await sendEmail(options)
     return NextResponse.json({message : "Form Submited Successfully", notification : message, success : true}, {status : 200})
    }
  else return NextResponse.json({message : "Form Submition Issue"},{success : false}, {status : 206})
}


export async  function POST(req){
  const {name, phone,email, course} = await req.json();
  const findCource =   `Select id,name from jtc_courses WHERE name = ${course} Union All Select name, brochure from jtc_brochures WHERE course_id = '${course}'`
  const getCourceQuery = await executeQuery(findCource)
  if(getCourceQuery.length == 0) return  NextResponse.json({message : "Cource Not Found"},{success : false}, {status : 206})
   const query =  `Insert into jtc_enquiry_form SET cource = "${course}",name = "${name}", email = "${email}" , phone_number = "${phone}",  form_id = '4'`

   const insertData = await executeQuery(query);
  if(insertData.affectedRows >  0){
    const courceName = getCourceQuery[0].name

      const message = `${name} Just fill Download Curriculum form. His Download ${courceName} Brochure. His phone no. is ${phone}` 
      const subject = "Download Curriculum"
      const options = {message, subject};

     await sendEmail(options)
     const pdfFile = getCourceQuery[1].brochure
     const decodedPdfData = Buffer.from(pdfFile, 'base64');
     NextResponse.setHeader('Content-Disposition', 'attachment; filename=filename.txt');
     NextResponse.setHeader('Content-Type', 'application/text');
     return NextResponse.send(decodedPdfData).json({message : "Form Submited Successfully", notification : message, success : true}, {status : 200})
    }
  else return NextResponse.json({message : "Form Submition Issue"},{success : false}, {status : 206})
}

