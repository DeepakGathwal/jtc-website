import { executeQuery } from "@/conn/conn";
import { client } from "@/middelware/redisFile";
import { NextResponse } from "next/server";



// Get All Chossing Point
export async  function GET(req){
    const redisdata = await client.get("aboutUs");
    if(!redisdata){
        const query =  `Select description from jtc_about_points`
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value =  await JSON.stringify(data)
        await client.set("aboutUs", value, {
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
