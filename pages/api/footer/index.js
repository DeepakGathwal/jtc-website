import { executeQuery } from "@/conn/conn";
import catchError from "@/middelware/catchError";

import { client } from "@/utils/redisFile";



export default async function handler(req, res) {
    const method = req.method
    switch (method) {
        case 'GET':  await footer(req, res);
            break;
      
        default:
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}





// Get All Chossing Point
export const footer = catchError(async(req,res) =>{
    const redisdata = await client.get("footer");
    if(!redisdata){
        const query =  `Select * from jtc_footer`
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value =  await JSON.stringify(data)
        await client.set("footer", value, {
            EX: process.env.REDIS_EXP,    
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
