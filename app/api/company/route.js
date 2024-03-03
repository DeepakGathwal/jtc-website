import { executeQuery } from "@/conn/conn";
import { client } from "@/middelware/redisFile";
import { NextResponse } from "next/server";
import { sendEmail } from "@/middelware/sendEmail";


// Get All Chossing Point
export async  function GET(req){
    const redisdata = await client.get("company");
    if(!redisdata){
        const query =  `Select name, icon, link from jtc_companies WHERE deleted_by = '0' `
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value =  await JSON.stringify(data)
        await client.set("company", value, {
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

