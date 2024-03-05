import { executeQuery } from "@/conn/conn";
import { client } from "@/middelware/redisFile";
import { NextResponse } from "next/server";



// Get All Chossing Point
export async  function GET(req){
    const redisdata = await client.get("tutorialType");
    if(!redisdata){
        const query =  `Select id, category from jtc_tutorial_type`
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value =  await JSON.stringify(data)
        await client.set("tutorialType", value);
          return NextResponse.json({data},{success : true}, {status : 200})
        }
        else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
    }else{ 
     const value = await JSON.parse(redisdata)
     return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}

// Get All Chossing Point
export async  function POST(req){
  const {type} =  await req.json();
  let queryApi = ''
    if(type == 0) queryApi = ' order by id desc Limit 12'
    else queryApi = ` && category LIKE '%${type}%' `
    const redisdata = await client.get(`tutorial${type}`);
    if(!redisdata){
        const query =  `Select id,name,icon, meta_tags,meta_keywords,meta_description from jtc_tutorial_cources WHERE  deleted_by = '0'  ${queryApi}`
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value =  await JSON.stringify(data)
        await client.set(`tutorial${type}`, value);
          return NextResponse.json({data},{success : true}, {status : 200})
        }
        else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
    }else{ 
     const value = await JSON.parse(redisdata)
     return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}
