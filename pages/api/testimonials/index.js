import { executeQuery } from "@/conn/conn";
import catchError from "@/middelware/catchError";

import { client } from "@/utils/redisFile";



export default async function handler(req, res) {
    const method = req.method
    switch (method) {
        case 'GET':  await testimonials(req, res);
            break;
      
        default:
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}





// Get All Chossing Point
export const testimonials = catchError(async(req,res) =>{
    const redisdata = await client.get("testimonials");
    if(!redisdata){
        const query =  `Select name, image, description, read_link from jtc_testimonials WHERE deleted_by = '0' `
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value =  await JSON.stringify(data)
        await client.set("testimonials", value, {
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
