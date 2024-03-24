'use client'
import React,{useEffect, useState} from 'react'
import { useParams,useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next';
import {  executejava, executepython, sendCode } from '@/apis/apis';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const Page = () => {
    const [initalcode, setInitialCode] = useState('')
    const [language, setLanguage] = useState([])
const value = getCookie('code')

const router = useParams()

const {code} = router

const getCode = async() =>{
    const chapter = value && value.split('&&')[0]
    const topic = value && value.split('&&')[1]
    const {data} = await sendCode(chapter, topic, code)
   
    setInitialCode(data);
}

const [output, setOutput] = useState('');

const runCode = async () => {
   if(language == 'python'){
      const {data} = await executepython(initalcode) // Send code to backend for execution
      return  setOutput(data);
    }else {
    const {data} = await executejava(initalcode) // Send code to backend for execution
    return  setOutput(data);

  }
  };

const handleCodeChange= (newCode) => {
 return setInitialCode(newCode);
}

useEffect(() => {
    getCode()

},[value,code])


  return (
    <div>
   {initalcode && <AceEditor
      mode="java" // Set the editor mode
      theme="monokai" // Set the editor theme
      onChange={handleCodeChange} // Set the onChange event handler
      name="code-editor" // Set the editor name
      editorProps={{ $blockScrolling: true }} // Set editor props
      value={initalcode && initalcode} // Set initial editor content
      style={{ width: '100%', height: '300px' }} // Set editor style
    />  }
     <div>
        <select name="language" id="" onChange={(e) => setLanguage(e.target.value)} >
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
        <button onClick={runCode}>Run Code</button>
      </div>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  )
}

export default Page
