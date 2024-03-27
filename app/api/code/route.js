import { executeQuery } from "@/conn/conn";
import { execSync, spawnSync } from 'child_process';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import { client } from "@/middelware/redisFile";
import { NextResponse } from "next/server";

// Get All Cources WithOut Category
export async function POST(req) {

    const { chapter, topic, code } = await req.json()
    const redisdata = await client.get(`${chapter + topic + code}`);
    if (!redisdata) {

        const query = `Select tutorial_html from jtc_tutorials_topics where category_id  =  (Select id from jtc_tutorial_cources WHERE  deleted_by = '0' && link = "${chapter}" ) && link = "${topic}" && deleted_by = '0'`

        const executeApi = await executeQuery(query)
        if (executeApi.length > 0) {
            const getCode = executeApi[0].tutorial_html

            const dom = new JSDOM(getCode);

            const elements = dom.window.document.getElementsByClassName('codebg');
            let data = ''
            for (let i = 0; i < elements.length; i++) {
                data = elements[i].textContent.replace(code, ' ');
            }

            const value = await JSON.stringify(data)
            await client.set(`${chapter + topic + code}`, value);
            return NextResponse.json({ data }, { success: true }, { status: 200 })
        }
        else return NextResponse.json({ message: "Code Not Found" }, { success: false }, { status: 206 })

    } else {
        const value = await JSON.parse(redisdata)
        return NextResponse.json({ data: value }, { success: true }, { status: 200 })
    }
}

// Java Compiler
export async function PATCH(req) {
    const { initalcode } = await req.json() 
    const findName = initalcode.split(/public\s+static\s+void\s+main\s*\(\s*String\s*\[\s*\]\s*/)[0];
 
  const reversedString = findName.split('').reverse().join('');
    const removeCurly = reversedString.split('ssalc')[0].replace('{', '').trim()

    const newClassName = removeCurly.split('').reverse().join('');
    try {
        fs.writeFileSync(`${newClassName}.java`, initalcode);
       } catch (error) {
        return NextResponse.json({ data:  ` error to execute that code ${initalcode}` }, { success: true }, { status: 200 })
      }

try {
    const dataBuffer = await execSync(`javac ${newClassName}.java && java ${newClassName}`);
  if(!dataBuffer)   return NextResponse.json({ data:  ` error to execute that code ${initalcode}` }, { success: true }, { status: 200 })

    const data = await  dataBuffer.toString('utf8'); // Convert buffer to string
  if(!data)   return NextResponse.json({ data:  ` error to execute that code ${initalcode}` }, { success: true }, { status: 200 })

    return NextResponse.json({ data }, { success: true }, { status: 200 })

} catch (error) {
    return NextResponse.json({ data: error.message }, { success: false }, { status: 206 })

} finally{
    await Promise.all([
        fs.unlinkSync(`${newClassName}.java`),
        fs.unlinkSync(`${newClassName}.class`) 
    ]);
}

}

// Python Compiler
export async function PUT(req) {
    const { initalcode } = await req.json() 
    
   // Execute Python script synchronously
const pythonProcess = spawnSync('python', ['-c', initalcode]);

// Handle output
if (pythonProcess.stdout && pythonProcess.stdout.length > 0) {
    const stdoutData = pythonProcess.stdout.toString('utf8');
    return NextResponse.json({ data: stdoutData }, { success: true }, { status: 200 });
}

// Handle errors
if (pythonProcess.stderr && pythonProcess.stderr.length > 0) {
    const stderrData = pythonProcess.stderr.toString('utf8');
    return NextResponse.json({ data: stderrData }, { success: false }, { status: 500 });
}

// Handle process exit
if (pythonProcess.status !== 0) {
    console.error(`Python process exited with code ${pythonProcess.status}`);
    return NextResponse.json({ data: 'Python process exited with non-zero status' }, { success: false }, { status: 500 });
}

// If no output, error, or non-zero exit status, assume success
return NextResponse.json({ data: 'Python script executed successfully' }, { success: true }, { status: 200 });
 

}