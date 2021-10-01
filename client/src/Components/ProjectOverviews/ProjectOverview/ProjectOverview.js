import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from './MainFeaturedPost';
import ProjectContent from './ProjectContent';

const useStyles = makeStyles((theme) => ({
  projectOverview: {
    marginTop: theme.spacing(8),
    position: 'relative',
    width: '100%'
  }
}));

const mainFeaturedPost = {
  title: 'Project Title',
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
};

export default function ProjectOverview() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.projectOverview}>
      <section>
        <MainFeaturedPost post={mainFeaturedPost} />
      </section>
      <ProjectContent />
      </main>
    </React.Fragment>
  );
}
