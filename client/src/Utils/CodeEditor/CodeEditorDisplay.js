import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
//import "./styles.css";

import CodeEditor from "./CodeEditor";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: '15px',
    display: 'inline-block'
  },
  textField: {
    width: '100%',
    height: '100%'
  },
  label: {
      [theme.breakpoints.down('410')]: {
        fontSize: '0.76rem',
        color: 'rgba(0, 0, 0, 0.54)'
      }    
  } 
}));

const languages = [
  {title: 'JavaScript'},
  {title: 'CSS'},
  {title: 'HTML'},
  {title: 'XML'},
  {title: 'JAVA'}
];

export default function CodeEditorDisplay(props) {
  const{title, newS}= props;
  const [codeLanguage, setCodeLanguage] = useState(null);
  const classes = useStyles();

  return (
    <div className={classes.textField}>
      {newS ? (
      <div style={{marginBottom: '10px'}}>
        <Autocomplete 
        id= 'combo-box'
        options={languages}
        getOptionLabel={(option) => option.title}
        style={{ width: 250, marginBottom: 15 }}
        value={codeLanguage || ''}
        onChange={(event, newValue) => {
          console.log(newValue);
          setCodeLanguage(newValue);
        }}
        renderInput={(params) => 
        <TextField
        {...params} 
        label="Select a language" 
        variant="outlined" 
        classes={{
          root: classes.label
        }}
        />}
        />
        <FormLabel classes={{root: classes.label}}>Code Editor</FormLabel>
      </div>
      ) 
      :
      (
      <h2 className={classes.title}>{title}</h2>
      )
      }
      {/* <fieldset>
        <legend>Choose language:</legend>
        <input
          type="radio"
          id="javascript"
          name="language"
          value="javascript"
          checked={codeLanguage === "javascript"}
          onChange={() => setCodeLanguage("javascript")}
        />
        <label htmlFor="javascript">JavaScript</label>
        <input
          type="radio"
          id="xml"
          name="language"
          value="markup"
          checked={codeLanguage === "markup"}
          onChange={() => setCodeLanguage("markup")}
        />
        <label htmlFor="xml">XML</label>
        <input
          type="radio"
          id="css"
          name="language"
          value="css"
          checked={codeLanguage === "css"}
          onChange={() => setCodeLanguage("css")}
        />
        <label htmlFor="css">CSS</label>
      </fieldset> */}
      {/* <h2 className={classes.title}>{title}</h2> */}
      <CodeEditor language={codeLanguage} />
    </div>
  );
}
