import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, TextField, FormControl, Divider, InputBase } from '@material-ui/core';
import CodeEditorDisplay from '../../Utils/CodeEditor/CodeEditorDisplay';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: '15px'
  },
  textField: {
    width: '100%',
  },
  attach: {
    marginTop: '50px'
  },
  editor: {
    height: '300px',
    width: '100%'
  },
  labeltext: {
    '& .MuiFormLabel-root': {
      [theme.breakpoints.down('410')]: {
        fontSize: '0.76rem',
        color: 'rgba(0, 0, 0, 0.54)'
      }
    }
  },
  label: {
      [theme.breakpoints.down('410')]: {
        fontSize: '0.76rem',
        color: 'rgba(0, 0, 0, 0.54)'
      }    
  }  
}));

export default function CodeSnippetItem(props) {
  const classes = useStyles();

  return (
      <Grid container spacing={1}>
          <Grid container item xs={12}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <TextField 
              name="codeSnippetTitle" 
              id="codeSnippetTitle" 
              label="Code Snippet Title*" 
              value={''} 
              classes={{
                root: classes.labeltext
              }}
              //onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid container item xs={12}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <TextField 
              name="codeSnippetDesc" 
              id="codeSnippetDesc" 
              label="Description*" 
              value={''} 
              classes={{
                root: classes.labeltext
              }}
              //onChange={handleChange}
              />
            </FormControl>
        </Grid>
        <Divider />
          <Grid container item xs={12}>
            <FormControl className={classes.editor}>
            <CodeEditorDisplay newS={true}/>
            </FormControl>
          </Grid>
        <Grid container item xs={12}>
        <FormControl className={clsx(classes.margin, classes.textField, classes.attach)}>
        <FormLabel classes={{root: classes.label}}>Attachments</FormLabel>
        <InputBase
        classes={{root: classes.label}}
        type='file'>
        </InputBase>
        </FormControl>
        </Grid>
      </Grid>
  );
}
