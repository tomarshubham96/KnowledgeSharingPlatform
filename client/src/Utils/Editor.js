import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
/* 
 * Simple editor component that takes placeholder text as a prop 
 */

 export default function Editor(props){

  console.log(props)

  const{data, handleIndustryFilesChange} = props;

  const modules={
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  };

  const formats=[
    'code-block'
  ];
    
  return(
    <div style={{height: '100%'}}>
    <span style={{
      fontFamily:'"Helvetica","Roboto", "Arial", sans-serif', 
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: '0.00938em',
      color: 'rgba(0, 0, 0, 0.54)',
      }}>
      {props.label}*
      </span>
    <ReactQuill 
      //theme={theme}
      name="editor"
      id="editor"
      style={{height: '100%'}}
      value={''}
      modules={modules}
      formats={formats}
      placeholder="Write Something"
     />    
   </div>
  );
 }