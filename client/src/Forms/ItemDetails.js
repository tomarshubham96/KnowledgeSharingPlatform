import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
      width: '100%'
  },
  textfield: {
      width: '97%',
      margin: theme.spacing(1.5),

  },
  formControlLabel: {
      marginTop: '10px',
      [theme.breakpoints.down('410')]: {
        fontSize: '0.76rem',
        color: 'rgba(0, 0, 0, 0.54)'
      }
  },
  label: {
    [theme.breakpoints.down('410')]: {
        fontSize: '0.76rem',
        color: 'rgba(0, 0, 0, 0.54)'
      }
  }
}));

export default function ItemDetails(props){
    const { formState, handleChange } = props;

    const classes = useStyles();
    
    return (
        <React.Fragment>
            <FormControl variant="outlined" className={classes.formControl}>
                <FormLabel className={classes.formControlLabel}>Choose Type of Item:</FormLabel>
                <RadioGroup 
                aria-label="item" 
                type="itemType"
                name="itemType" 
                value={formState.itemType} 
                onChange={handleChange}
                style={{ margin: 10 }}>
                    <FormControlLabel classes={{label: classes.label}} value="Code Snippet" control={<Radio />} label="Code Snippet" />
                    <FormControlLabel classes={{label: classes.label}} value="Micro Solution" control={<Radio />} label="Micro Solution" />
                    <FormControlLabel classes={{label: classes.label}} value="QnA" control={<Radio />} label="QnA" />
                    <FormControlLabel classes={{label: classes.label}} value="Project Overview" control={<Radio />} label="Project Overview" />
                    <FormControlLabel classes={{label: classes.label}} value="Industry Learning" control={<Radio />} label="Industry Learning" />
                </RadioGroup>
            </FormControl>
          </React.Fragment>
       
    );
  }
