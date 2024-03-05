import { NextResponse } from "next/server";
import { client } from "@/middelware/redisFile";
import { executeQuery } from "@/conn/conn";


export async  function PUT(req){
    const {course} = await req.json();
    const redisdata = await client.get(`point${course}`);
    if(!redisdata){
        const getIdQuery = `Select id from jtc_courses WHERE name = '${course}' && deleted_by = '0'`
        const getId = await executeQuery(getIdQuery);
        if(getId.length > 0){
        const courceId = await getId[0].id
        const query =  `Select description, icon from jtc_course_join_point Where course_id LIKE '%${courceId}%'  `
        const data = await executeQuery(query);
        if(data.length > 0) {
        const value = await JSON.stringify(data)
        await client.set(`point${course}`, value);
          return NextResponse.json({data},{success : true}, {status : 200})
        }
      } else return NextResponse.json({message : "Course Not found"},{success : false}, {status : 206})
    }else{ 
     const value = await JSON.parse(redisdata)
     return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}


export async function PATCH(req){

  const {id} = await req.json();
 
  const redisdata = await client.get(`chapter${id}`);
  if(!redisdata){
    const query =  `Select id, chapter_name from jtc_course_chapter WHERE category_id Like '%${id}%' && deleted_by = '0' `
    const data = await executeQuery(query);
    let promises = []
    if(data.length > 0) 
await data.map(async(ab) => {
            promises.push(new Promise(async (resolve, reject) => {

             const topicQuery = `Select topic from jtc_course_topics WHERE chapter_id Like '%${ab.id}%' && deleted_by = '0' `
             const executeTopic = await executeQuery(topicQuery)
               resolve({
                chapter : ab.chapter_name,
                topic : [...executeTopic]
              });
              
            }))
           })
        try {
          const data = await Promise.all(promises);
          const value =  await JSON.stringify(data)
          await client.set(`chapter${id}`, value);
           return NextResponse.json({data},{success : true}, {status : 200})
      
        
      
        } catch (err) {
           return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})

        }
        // The_Nautigal(())
      
     
     
   
  }else{
   const value = await JSON.parse(redisdata)
  
   return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}

export async function POST(req){
  const {course} = await req.json();
  const redisdata = await client.get(`batch${course}`);
  if(!redisdata){
    const query =  `Select batch.id,TIME_FORMAT(batch.time_to, '%h:%i %p') as time_to,TIME_FORMAT(batch.time_from, '%h:%i %p') as time_from, (CASE WHEN batch.date < CURDATE() Then 'Sold Out' WHEN batch.date BETWEEN CURDATE() AND (NOW() + INTERVAL 7 DAY) Then 'Filling Fast' ELSE 'Available' END) as status ,Date_Format(batch.date, '%d') as date, Date_Format(batch.date, '%M %y') as monthYear,cource.name as cource, batch.week_days, CASE WHEN EXTRACT(DAY FROM batch.date) IN (11, 12, 13) THEN 'th' WHEN EXTRACT(DAY FROM batch.date) % 10 = 1 THEN 'st' WHEN EXTRACT(DAY FROM batch.date) % 10 = 2 THEN 'nd' WHEN EXTRACT(DAY FROM batch.date) % 10 = 3 THEN 'rd' ELSE 'th' END AS formatted_date from jtc_batches as batch INNER Join jtc_courses as cource On cource.id = batch.cource_id WHERE batch.deleted_by = '0' && cource.name = '${course}' && cource.deleted_by = '0'`

      const data = await executeQuery(query);
      if(data.length > 0) {
      const value =  await JSON.stringify(data)
      await client.set(`batch${course}`, value);
        return NextResponse.json({data},{success : true}, {status : 200})
      }
      else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
  }else{ 
   const value = await JSON.parse(redisdata)

   return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}

export async function GET(req){
  const redisdata = await client.get(`roles`);
  if(!redisdata){
    const query =  `Select id, role from jtc_roles WHERE vacancy = '1' && deleted_by = '0'`
      const data = await executeQuery(query);
      if(data.length > 0) {
      const value =  await JSON.stringify(data)
      await client.set(`roles`, value);
        return NextResponse.json({data},{success : true}, {status : 200})
      }
      else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
  }else{ 
   const value = await JSON.parse(redisdata)
   return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}

