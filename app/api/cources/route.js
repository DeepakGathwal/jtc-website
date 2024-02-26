import { executeQuery } from "@/conn/conn";
import catchError from "@/middelware/catchError";

import { client } from "@/middelware/redisFile";
import { NextResponse } from "next/server";




// Get All Cources WithOut Category
export async  function GET(req){
    const redisdata = await client.get("cources");
    if(!redisdata){
        const query =  `Select id, name, icon from jtc_cources WHERE deleted_by = '0' `
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value =  await JSON.stringify(data)
        await client.set("cources", value, {
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


// All Cources Category
export async  function PATCH(req){
  const redisdata = await client.get("courceCategories");
  if(!redisdata){
      const query =  `Select DISTINCT category.id, category.category from jtc_cources as cource Inner Join jtc_cource_category as category On category.id = cource.category WHERE cource.deleted_by = '0' `
      const data = await executeQuery(query);
      if(data.length > 0) {
      const value =  await JSON.stringify(data)
      await client.set("courceCategories", value, {
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
