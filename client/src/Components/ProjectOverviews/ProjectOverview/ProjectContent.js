import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    margin: '50px auto',
    padding: '0 40px',
    boxSizing: 'border-box'
  },
  articleH2: {
      color: '#F63232',
      fontSize: '48px'
  },
  articleP: {
    lineHeight: '2em',
    color: '#4b4b4b'
},
images: {
    textAlign: 'center',
    margin: '80px 0',
    whiteSpace: 'nowrap'
},
imagesLi: {
    display: 'inline-block',
    width: '40%',
    margin: '20px 5%'
},
imagesLiImg: {
    maxWidth: '100%',
    maxHeight: '50%',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover'
}
}));

export default function ProjectContent() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <article className={classes.main}>
          <h2 className={classes.articleH2}>About Project</h2>
          <p className={classes.articleP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam quaerat doloremque delectus
                numquam commodi error? Dolorem optio alias, perferendis quaerat iste in molestiae aliquid quis quisquam
                autem vitae ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, est ex, atque
                quia reprehenderit perferendis doloribus laborum commodi eligendi ratione harum doloremque aspernatur.
                Similique nulla repudiandae vero laboriosam quasi molestias! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nesciunt unde mollitia porro cumque eos voluptatum. Doloribus voluptatum laboriosam
                amet aut distinctio, quos iste voluptates quis, dolores modi magnam sit dignissimos.
            </p>
            <ul className={classes.images}>
            <li className={classes.imagesLi}><img src="https://source.unsplash.com/random" alt="image1" className={classes.imagesLiImg}/></li>
            <li className={classes.imagesLi}><img src="https://source.unsplash.com/random" alt="image2" className={classes.imagesLiImg}/></li>
        </ul>
      </article>
    </React.Fragment>
  );
}
