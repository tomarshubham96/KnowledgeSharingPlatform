import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, TextField, FormControl, Divider, InputBase } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import Editor from '../../Utils/Editor';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    height: '210px',
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

const categories = [
  { title: 'Project' },
  { title: 'Organisation' },
  { title: 'IT Infra' },
  { title: 'Technical' },
  { title: 'Non Technical' }
];

export default function QnAItem(props) {
  const classes = useStyles();
  const [questionType, setQuestionType] = React.useState(null);

  return (
    <Grid container spacing={2} className={classes.margin}> 
      <Grid item xs={12}>
        <TextField
          fullWidth
          name="question"
          id="question"
          label="Question Title*"
          value={''}
          classes={{
            root: classes.labeltext
          }}
        //onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          name="projectName"
          id="projectName"
          label="Project Name*"
          value={''}
          classes={{
            root: classes.labeltext
          }}
        //onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          id='combo-box'
          options={categories}
          getOptionLabel={(option) => option.title}
          style={{ width: 250 }}
          value={questionType || ''}
          onChange={(event, newValue) => {
            setQuestionType(newValue);
          }}
          renderInput={(params) => 
          <TextField 
          {...params} 
          label="Select a cateogory" 
          variant="outlined" 
          classes={{
            root: classes.labeltext
          }}
          />}
        />
      </Grid>
      <Grid item xs={12} style={{ height: 342 }}>
        <Editor label={'Ask a Question..'} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          name="tag"
          id="tag"
          label="Add Tags"
          value={''}
          classes={{
            root: classes.labeltext
          }}
        //onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          name="people"
          id="people"
          label="Add People*"
          value={''}
          classes={{
            root: classes.labeltext
          }}
        //onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FormLabel classes={{root: classes.label}}>Attachments</FormLabel>
        <InputBase
        classes={{root: classes.label}}
          type='file'>
        </InputBase>
      </Grid>
    </Grid>
  );
}
