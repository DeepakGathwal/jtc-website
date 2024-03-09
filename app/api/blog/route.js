import { escapeRequestBody, executeQuery } from "@/conn/conn";
import catchError from "@/middelware/catchError";
import { sendEmail } from "@/middelware/sendEmail";
import { NextResponse } from "next/server";
import { client } from "@/middelware/redisFile";


// Get All Chossing Point
export async  function GET(req){
    const redisdata = await client.get("blogs");
    if(!redisdata){
        const query = `Select blog.link,blog.id,blog.name,category.name as category, blog.icon, Date_Format(blog.created_at, '%d-%M-%Y') as addedAt from jtc_blogs as blog Left Join jtc_blog_category as category On category.id = blog.blog_category Where blog.deleted_by = '0' Order by blog.id desc`
        const data = await executeQuery(query);
        if(data.length > 0) {
       
        const value = await JSON.stringify(data)
        await client.set("blogs", value);
          return NextResponse.json({data},{success : true}, {status : 200})
        }
        else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
    }else{ 
     const value = await JSON.parse(redisdata)
   
     return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}
