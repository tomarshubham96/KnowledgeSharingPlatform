import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box>
        //   <Typography>{children}</Typography>
        // </Box>
        <div>{children}</div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles({

  card: {
    height: '100%',
    width: '100%'
  },
  cardContent: {
    width: '100%',
    height: 'calc(100% - 48px)'
  },
  tabPanel: {
    width: '100%',
    height: '100%'
  }
});

export default function DiscussionForm(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);  


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  const data = [`${props.tabtitle} Description`, 'Questions', 'Comments'];

  return (
    <Card className={classes.card}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {data.map(profile => (
          <Tab key={profile} label={profile} />
        ))}
      </Tabs>
      <Divider />
      <CardContent className={classes.cardContent}>
        <TabPanel value={value} index={0} className={classes.tabPanel}>
          {props.desc}
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}>
            Questions
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabPanel}>
          Comments
        </TabPanel>
      </CardContent>
    </Card>
  );
}

DiscussionForm.propTypes = {
  course: PropTypes.object,
};

