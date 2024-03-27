'use client'
import React,{useEffect, useState} from 'react'
import { useParams,useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next';
import {  executejava, executepython, sendCode , executecpp,executec} from '@/apis/apis';
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
    setLanguage(chapter)
    const topic = value && value.split('&&')[1]
    const {data} = await sendCode(chapter, topic, code)
   
   return data  ?  setInitialCode(data) : router.push('/tutorial');
}

const [output, setOutput] = useState('');

const runCode = async () => {
let data ; 
  switch(language){
    case 'python':data =  await executepython(initalcode)
    break;
    case 'c++':data =  await executecpp(initalcode)
    break;
    case 'conly':data =  await executec(initalcode)
    break;
    case 'core-java':data =  await executejava(initalcode)
    break;
    default: return setOutput("Language Not Select") 
  }
   
    return data && setOutput(data.data);

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
      mode="javascript" // Set the editor mode
      theme="monokai" // Set the editor theme
      onChange={handleCodeChange} // Set the onChange event handler
      name="code-editor" // Set the editor name
      editorProps={{ $blockScrolling: true }} // Set editor props
      value={initalcode && initalcode} // Set initial editor content
      style={{ width: '100%', height: '300px' }} // Set editor style
    />  }
     <div>
        <select name="language" id="" onChange={(e) => setLanguage(e.target.value)} >
          <option value="core-java">Java</option>
          <option value="python">Python</option>
          <option value="c++">C++</option>
          <option value="conly">C</option>
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
