import uuid from 'uuid/v1';

export const featuredPost = [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_3.png',
    projectTitle: 'Featured Title A',
    description: `Nesciunt unde mollitia porro cumque eos voluptatum. Doloribus voluptatum laboriosam
    amet aut distinctio, quos iste voluptates quis,`,
    authorName: 'Ekaterina Tankova',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_4.png',
    projectTitle: 'Featured Title B',
    description: `Cupiditate, est ex, atque
    quia reprehenderit perferendis doloribus laborum commodi eligendi ratione harum doloremque aspernatur.`,
    authorName: 'Cao Yu',
    createdAt: new Date('03-25-2020').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_2.png',
    projectTitle: 'Featured Title C',
    description: `aperiam quaerat doloremque delectus
    numquam commodi error? Dolorem optio alias,`,
    authorName: 'Alexa Richardson',
    createdAt: new Date('09-10-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_5.png',
    projectTitle: 'Featured Title D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authorName: 'Anje Keizer',
    createdAt: new Date('02-05-2018').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    projectTitle: 'Featured Title E',
    description: `Eaque aperiam quaerat doloremque delectus
                numquam commodi error? Dolorem optio alias, perferendis quaerat`,
    authorName: 'Clarke Gillebert',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_1.png',
    description: `iste in molestiae aliquid quis quisquam
    autem vitae ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    projectTitle: 'Featured Title F',
    authorName: 'Adam Denisov',
    createdAt: new Date('06-25-2020').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  }
];

export const editorsPick = [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_3.png',
    projectTitle: `Editor's Pick A`,
    description: `Nesciunt unde mollitia porro cumque eos voluptatum. Doloribus voluptatum laboriosam
    amet aut distinctio, quos iste voluptates quis,`,
    authorName: 'John Doe',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_4.png',
    projectTitle: 'Editor Pick B',
    description: `Cupiditate, est ex, atque
    quia reprehenderit perferendis doloribus laborum commodi eligendi ratione harum doloremque aspernatur.`,
    authorName: 'Divya',
    createdAt: new Date('03-25-2020').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_2.png',
    projectTitle: 'Editor Pick C',
    description: `aperiam quaerat doloremque delectus
    numquam commodi error? Dolorem optio alias,`,
    authorName: 'Priyanka',
    createdAt: new Date('09-10-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_5.png',
    projectTitle: 'Editor Pick D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authorName: 'Shubham',
    createdAt: new Date('02-05-2018').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    projectTitle: 'Editor Pick E',
    description: `Eaque aperiam quaerat doloremque delectus
                numquam commodi error? Dolorem optio alias, perferendis quaerat`,
    authorName: 'Michael Clarke',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  }
];

export const recentPosts = [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_3.png',
    projectTitle: `Recent Post A`,
    description: `Nesciunt unde mollitia porro cumque eos voluptatum. Doloribus voluptatum laboriosam
    amet aut distinctio, quos iste voluptates quis,`,
    authorName: 'Sachin',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_4.png',
    projectTitle: 'Recent Post B',
    description: `Cupiditate, est ex, atque
    quia reprehenderit perferendis doloribus laborum commodi eligendi ratione harum doloremque aspernatur.`,
    authorName: 'Charlie Sheen',
    createdAt: new Date('03-25-2020').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_2.png',
    projectTitle: 'Recent Post C',
    description: `aperiam quaerat doloremque delectus
    numquam commodi error? Dolorem optio alias,`,
    authorName: 'Alan harper',
    createdAt: new Date('09-10-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_5.png',
    projectTitle: 'Recent Post D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authorName: 'Walden Schmidt',
    createdAt: new Date('02-05-2018').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    projectTitle: 'Recent Post E',
    description: `Eaque aperiam quaerat doloremque delectus
                numquam commodi error? Dolorem optio alias, perferendis quaerat`,
    authorName: 'Michael Clarke',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    projectTitle: 'Recent Post F',
    description: `Eaque aperiam quaerat doloremque delectus
                numquam commodi error? Dolorem optio alias, perferendis quaerat`,
    authorName: 'Jullie Clarke',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  }
];


export const seeAll = [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_3.png',
    projectTitle: `Project Title A`,
    description: `Nesciunt unde mollitia porro cumque eos voluptatum. Doloribus voluptatum laboriosam
    amet aut distinctio, quos iste voluptates quis,`,
    authorName: 'Sachin',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_4.png',
    projectTitle: 'Project Title B',
    description: `Cupiditate, est ex, atque
    quia reprehenderit perferendis doloribus laborum commodi eligendi ratione harum doloremque aspernatur.`,
    authorName: 'Charlie Sheen',
    createdAt: new Date('03-25-2020').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_2.png',
    projectTitle: 'Project Title C',
    description: `aperiam quaerat doloremque delectus
    numquam commodi error? Dolorem optio alias,`,
    authorName: 'Alan harper',
    createdAt: new Date('09-10-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_5.png',
    projectTitle: 'Project Title D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authorName: 'Walden Schmidt',
    createdAt: new Date('02-05-2018').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    projectTitle: 'Project Title E',
    description: `Eaque aperiam quaerat doloremque delectus
                numquam commodi error? Dolorem optio alias, perferendis quaerat`,
    authorName: 'Michael Clarke',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    projectTitle: 'Project Title F',
    description: `Eaque aperiam quaerat doloremque delectus
                numquam commodi error? Dolorem optio alias, perferendis quaerat`,
    authorName: 'Jullie Clarke',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    projectTitle: 'Project Title G',
    description: `Eaque aperiam quaerat doloremque delectus
                numquam commodi error? Dolorem optio alias, perferendis quaerat`,
    authorName: 'Jullie Clarke',
    createdAt: new Date('06-25-2019').toDateString(),
    image: 'https://source.unsplash.com/random',
    imgText: 'image description'
  }
];

export default {
  featuredPost,
  editorsPick,
  recentPosts,
  seeAll
}