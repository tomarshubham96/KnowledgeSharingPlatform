import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CodeIcon from '@material-ui/icons/Code';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PageviewIcon from '@material-ui/icons/Pageview';
import { useHistory } from "react-router-dom";

export const MainListItems = () => {
  let history = useHistory();

  const handleClick = (e) => {
    history.push(e);
  }

  return (
    <div>
      <ListItem button onClick={() => handleClick('/')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" onClick={() => handleClick('/')} />
      </ListItem>

      <ListItem button onClick={() => handleClick('codeSnippetsdashboard')}>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Code Snippets" onClick={() => handleClick('codeSnippetsdashboard')} />
      </ListItem>

      <ListItem button onClick={() => handleClick('industryLearningDashboard')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Industry Learning" onClick={() => handleClick('industryLearningDashboard')} />
      </ListItem>

      <ListItem button onClick={() => handleClick('microSolutions')}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Micro Solutions" onClick={() => handleClick('microSolutions')} />
      </ListItem>

      <ListItem button onClick={() => handleClick('qnadashboard')}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Q&A Platform" onClick={() => handleClick('qnadashboard')} />
      </ListItem>

      <ListItem button onClick={() => handleClick('projectOverviewDashBoard')}>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Project Overviews" onClick={() => handleClick('projectOverviewDashBoard')} />
      </ListItem>

      <ListItem button onClick={() => handleClick('leaderboard')}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Leaderboard" onClick={() => handleClick('leaderboard')} />
      </ListItem>

    </div>
  )
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);