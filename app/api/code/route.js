import { executeQuery } from "@/conn/conn";
import { execSync } from 'child_process';
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

// All Cources Category
export async function PATCH(req) {
    const { initalcode } = await req.json() 
    const findName = initalcode.split(/public\s+static\s+void\s+main\s*\(\s*String\s*\[\s*\]\s*/)[0];
  const reversedString = findName.split('').reverse().join('');
  
    const removeCurly = reversedString.split('ssalc')[0].replace('{', '').trim()
    
    const newClassName = removeCurly.split('').reverse().join('');
  
fs.writeFileSync(`${newClassName}.java`, initalcode)
try {
    const dataBuffer = await execSync(`javac ${newClassName}.java && java ${newClassName}`);

    const data = await  dataBuffer.toString('utf8'); // Convert buffer to string

    return NextResponse.json({ data }, { success: true }, { status: 200 })

} catch (error) {
    return NextResponse.json({ data: error.message }, { success: true }, { status: 200 })


} finally{
    await Promise.all([
        fs.unlinkSync(`${newClassName}.java`),
        fs.unlinkSync(`${newClassName}.class`)
        
    ]);
}

}