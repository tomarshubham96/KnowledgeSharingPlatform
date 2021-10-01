import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, TextField, FormControl, Divider, InputBase } from '@material-ui/core';
import Editor from '../../Utils/EditorCopy';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: '15px',
    marginBottom: '5px'
  },
  textField: {
    width: '100%',
  },
  attach: {
    marginTop: '20px'
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

export default function IndustryLearningItem(props) {
  const{handleIndustryFilesChange} = props;
  const classes = useStyles();

  return (
      <Grid container spacing={1}>
        <Grid container item xs={12}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <TextField 
              name="industryLearningTitle" 
              id="industryLearningTitle" 
              label="Industry Learning Title*" 
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
              name="industryLearningDesc" 
              id="industryLearningDesc" 
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
            <FormControl className={clsx(classes.margin, classes.textField)}>
            <Editor 
            label={'Industry Leanring Content'}
            //handleIndustryFilesChange={handleIndustryFilesChange}
            />
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
