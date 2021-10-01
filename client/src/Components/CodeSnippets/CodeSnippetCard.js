import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  cardContentRoot: {
    height: '160px',
    [theme.breakpoints.down('345')]: {
      height: '140px'
    },
    [theme.breakpoints.down('490')]: {
      padding: '8px'
    }
  },
  cardTitle: {
    [theme.breakpoints.down('490')]: {
      fontSize: '1.1rem'
    },
    [theme.breakpoints.down('365')]: {
      fontSize: '0.9rem',
      fontWeight: 550
    }
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  authorGrid: {
    alignItems: 'flex-end',
    display: 'flex',
    width: '50%',
    padding: '5px'
  },
  timeGrid: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('490')]: {
      fontSize: '0.789rem'
    }
  },
  createdBy: {
    marginLeft: '8px'
  },
  bookmark: {
    "&:hover": {
      opacity: 1
    },
    [theme.breakpoints.down('490')]: {
      width: '1.3rem'
    }
  },
  toggleGrid: {
    display: 'flex',
    width: '50%',
    padding: '5px',
    justifyContent: 'flex-end'
  },
  codeTile: {
    maxHeight: '86px',
    overflowY: 'auto',
    "&::-webkit-scrollbar": {
      display: 'none'
    },
    [theme.breakpoints.down('490')]: {
      maxHeight: '99px',
    },
    [theme.breakpoints.down('345')]: {
      maxHeight: '86px',
    }
  },
  code: {
    position: 'initial',
    [theme.breakpoints.down('490')]: {
      fontSize: '0.75rem'
    }
  }
}));

const CodeSnippetCard = ({ className, codeSnippet, ...rest }) => {
  const classes = useStyles();
  const [read, setRead] = React.useState(false);

  const handleChange = () => {
    setRead(!read);
  };

  let history = useHistory();

  const handleClick = () => {
    console.log("object");
    history.push("codeSnippetEditor");
  }
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent onClick={handleClick} className={classes.cardContentRoot}>
        <div>
          <Typography
            align="center"
            color="textPrimary"
            variant="h6"
            classes={{
              h6: classes.cardTitle
            }}
          >
            {codeSnippet.snippetTitle}
          </Typography>
        </div>
        <div
          className={classes.timeGrid}>
          {codeSnippet.createdAt}
          <Tooltip title="BookMark*">
            <BookmarkBorderOutlinedIcon className={classes.bookmark} />
          </Tooltip>
        </div>
        <Box flexGrow={1} />
        <Divider />
        <div className={classes.codeTile}>
          <pre className={codeSnippet.lineNumber}>
            <code className={clsx(codeSnippet.language, classes.code)}>
              {codeSnippet.description}
            </code>
          </pre>
        </div>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Grid
        container
        justify="space-between"
        className={classes.statsItem}
      >
        <Grid
          item
          className={classes.authorGrid}
        >
          <Box
          >
            <Avatar
              alt="Product"
              className={classes.avatar}
              src={codeSnippet.avatarUrl}
            />
          </Box>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="subtitle2"
            className={classes.createdBy}
          >
            {codeSnippet.createdBy}
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.toggleGrid}>
          <Tooltip title={read ? "Mark as Not Seen" : "Mark as Seen"}>
            <Switch
              checked={read}
              name="toggle"
              color="primary"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
  );
};

CodeSnippetCard.propTypes = {
  className: PropTypes.string,
  codeSnippet: PropTypes.object.isRequired
};

export default CodeSnippetCard;