
import { execSync, spawnSync } from 'child_process';
import fs from 'fs';

import { NextResponse } from "next/server";

// Get All Cources WithOut Category

// Java Compiler
export async function POST(req) {
    const { initalcode } = await req.json()  
fs.writeFileSync(`cppcompiler.cpp`, initalcode)
const command = `g++ -o cppcompiler cppcompiler.cpp && cppcompiler.exe`;
try {
    const dataBuffer = await execSync(command);
    const data = await  dataBuffer.toString('utf8'); // Convert buffer to string
    return NextResponse.json({ data }, { success: true }, { status: 200 })

} catch (error) {
    return NextResponse.json({ data: error.message }, { success: true }, { status: 200 })


}

}

// Python Compiler
export async function PUT(req) {
    const { initalcode } = await req.json()  
fs.writeFileSync(`ccompiler.c`, initalcode)
const command = `g++ -o ccompiler ccompiler.c && ccompiler.exe`;
try {
    const dataBuffer = await execSync(command);
    const data = await  dataBuffer.toString('utf8'); // Convert buffer to string
    return NextResponse.json({ data }, { success: true }, { status: 200 })

} catch (error) {
    return NextResponse.json({ data: error.message }, { success: true }, { status: 200 })


}

}