import { executeQuery } from "@/conn/conn";
import { createClient } from 'redis';
import catchError from "@/middelware/catchError";

export default async function handler(req, res) {
    const method = req.method
    switch (method) {
        case 'GET':  await choosePoint(req, res);
            break;
      
        default:
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}



const client = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();
  await client.set('key', 'value');
const value = await client.get('key');
await client.disconnect();
// Delete api pending
export const choosePoint = catchError(async(req,res) =>{
    const query =  `Select point from jtc_choosing_point `
    const data = await executeQuery(query);
    if(data.length > 0) return res.status(200).json({data, success : true})
    else return res.status(200).json({message : "Data Empty", success : false})
})
