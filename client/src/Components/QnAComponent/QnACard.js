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
  description: {
    [theme.breakpoints.down('400')]: {
      letterSpacing: '0em'           
  }
  }
}));

const QnACard = ({ className, qna, ...rest }) => {
  const classes = useStyles();
  const [read, setRead] = React.useState(false);

  const handleChange = () => {
    setRead(!read);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent className={classes.cardContentRoot}>
        <div>
          <Typography
            align="center"
            color="textPrimary"
            variant="h6"
            classes={{
              h6: classes.cardTitle
            }}
          >
            {qna.qnaTitle}
          </Typography>
        </div>
        <div
          className={classes.timeGrid}>
          {qna.createdAt}
          <Tooltip title="BookMark*">
          <BookmarkBorderOutlinedIcon className={classes.bookmark} />
          </Tooltip>
        </div>
        <Box flexGrow={1} />
        <Divider />
        <Typography
          color="textPrimary"
          variant="body2"
          gutterBottom
          classes={{
            body2: classes.description,
          }}
        >
          {qna.description}
        </Typography>
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
              alt="User"
              className={classes.avatar}
              src={qna.avatarUrl}
            />
          </Box>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
            gutterBottom
            className={classes.createdBy}
          >
            {qna.createdBy}
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

QnACard.propTypes = {
  className: PropTypes.string,
  qna: PropTypes.object.isRequired
};

export default QnACard;