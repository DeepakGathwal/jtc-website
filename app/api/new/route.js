
import { executeQuery } from "@/conn/conn";
import { client } from "@/middelware/redisFile";
import {  NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/middelware/sendEmail";
import fs from 'fs';
import * as path from 'path';


export async  function GET(req, res){
    const findCource =   `Select course.name as course,brochures.name, brochures.brochure from jtc_courses as course INNER JOIN jtc_brochures as brochures On brochures.course_id = course.id  WHERE course.link = 'web-development' `
    const getCourseQuery = await executeQuery(findCource)
    if (getCourseQuery.length === 0) {
        return res.status(206).json({ message: "Course Not Found", success: false });
      }
    
      const pdfFile = getCourseQuery[0].brochure;
      const pdfName = getCourseQuery[0].name;
      const decodedPdfData = Buffer.from(pdfFile, 'base64');
   
    
      res.setHeader('Content-Disposition', `attachment; filename=${pdfName}`);
      res.setHeader('Content-Type', 'application/text');
      res.send(decodedPdfData);
  }
  
  