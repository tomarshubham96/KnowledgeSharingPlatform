import React from 'react';
import Row from './ProjectOverviewDashboardRow';
import {
    makeStyles
} from '@material-ui/core';
import PageTitle from '../../Utils/PageTitle';
import Toolbar from '../../Utils/Toolbar';
import { featuredPost } from '../../data/mockProjectOverviewData';
import { editorsPick } from '../../data/mockProjectOverviewData';
import { recentPosts } from '../../data/mockProjectOverviewData';
import { seeAll } from '../../data/mockProjectOverviewData';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(1),
        paddingLeft: '25px',
        paddingRight: '25px'
    }
}));

export default function ProjectOverviewDashboard() {
    const classes = useStyles();
    // const [projectOverviews] = React.useState(data);
    return (
        <PageTitle
            title="Project Overview"
            className={classes.root}>
                <Toolbar searchtitle="Project Overviews" />

                <Row title="Featured Projects" projectOverviews={featuredPost} isLargeRow />
                <Row title="Editor's Pick" projectOverviews={editorsPick} />
                {/* <Row title="Most Read" projectOverviews={projectOverviews} /> */}
                <Row title="Recent Posts" projectOverviews={recentPosts} />
                <Row title="See All" projectOverviews={seeAll} />
        </PageTitle>
    );
}
