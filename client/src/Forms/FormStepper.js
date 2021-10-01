import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import ItemDetails from './ItemDetails';
import ItemType from './ItemType'


const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  stepLabelRoot: {
    padding: '20px',
    [theme.breakpoints.down('651')]: {
      padding: '15px'
    }
  },
  stepContent: {
    paddingLeft: '60px',
    paddingRight: '60px',
    [theme.breakpoints.down('450')]: {
      paddingLeft: '40px',
      paddingRight: '40px',
    }
  },
  stepContentButtons: {
    margin: 'inherit'
  },
  stepLabel: {
    [theme.breakpoints.down('410')]: {
      fontSize: '0.76rem',
      color: 'rgba(0, 0, 0, 0.54)'
    }
  }
}));

const initialState = {
  itemType: '',
  projectPost: '',
  projectFiles: '',
  industryPost: '',
  industryFiles: ''
};

function apiReducer(state, action) {

  switch (action.type) {
    case "itemType":
      return { ...state, itemType: action.payload };
    case "projectPost":
      return { ...state, projectPost: action.payload };
    case "projectFiles":
      return { ...state, projectFiles: action.payload };
    case "industryFiles":
      return { ...state, industryFiles: action.payload };
    default:
      return state;
  }
}


export default function FormStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['What do you want to add?', 'Add Item Details', 'Preview'];

  const [formState, dispatch] = React.useReducer(apiReducer, initialState);

  const handleChange = event => {
    dispatch({ type: event.target.name, payload: event.target.value })
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {

  }

  const handleEditorContentChange = (value) => {
    console.log(value);
    dispatch({ type: 'projectPost', payload: value })
  };

  const handleEditorFilesChange = (value) => {
    console.log(value);
    dispatch({ type: 'projectFiles', payload: value })
  };

  const handleIndustryFilesChange = (value) => {
    console.log(value);
    dispatch({ type: 'industryFiles', payload: value })
  };

  console.log(formState);
  const stepContent = (step) => {

    switch (step) {
      case 0:
        return (
          <ItemDetails
            handleChange={handleChange}
            formState={formState} />
        );
      case 1:
        return (
          <ItemType
            formState={formState}
            handleEditorContentChange={handleEditorContentChange}
            handleEditorFilesChange={handleEditorFilesChange}
            handleIndustryFilesChange={handleIndustryFilesChange}
          />
        );
      case 2:
        return (
          <div></div>
        );
      default:
        return 'Unknown step';
    }
  }


  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel className={classes.stepLabelRoot}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              classes={{
                label: classes.stepLabel
              }}
            >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <div>
          <Typography className={classes.instructions}>All steps completed</Typography>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      ) : (
        <div className={classes.stepContent}>
          {stepContent(activeStep)}
          <div className={classes.stepContentButtons}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
              </Button>
            <Button variant="contained" color="primary" onClick={handleNext} disabled={!formState.itemType}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
