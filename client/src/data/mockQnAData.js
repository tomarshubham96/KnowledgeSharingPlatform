import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_3.png',
    qnaTitle: 'Question A',
    description: `Nesciunt unde mollitia porro cumque eos voluptatum. Doloribus voluptatum laboriosam
    amet aut distinctio, quos iste voluptates quis,`,
    createdBy: 'Ekaterina Tankova',
    createdAt: new Date('06-25-2019').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_4.png',
    qnaTitle: 'Question B',
    description: `Cupiditate, est ex, atque
    quia reprehenderit perferendis doloribus laborum commodi eligendi ratione harum doloremque aspernatur.`,
    createdBy: 'Cao Yu',
    createdAt: new Date('03-25-2020').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_2.png',
    qnaTitle: 'Question C',
    description: `aperiam quaerat doloremque delectus
    numquam commodi error? Dolorem optio alias,`,
    createdBy: 'Alexa Richardson',
    createdAt: new Date('09-10-2019').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_5.png',
    qnaTitle: 'Question D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    createdBy: 'Anje Keizer',
    createdAt: new Date('02-05-2018').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    qnaTitle: 'Question E',
    description: `Eaque aperiam quaerat doloremque delectus
                numquam commodi error? Dolorem optio alias, perferendis quaerat`,
    createdBy: 'Clarke Gillebert',
    createdAt: new Date('06-25-2019').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_1.png',
    description: `iste in molestiae aliquid quis quisquam
    autem vitae ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    qnaTitle: 'Question F',
    createdBy: 'Adam Denisov',
    createdAt: new Date('06-25-2020').toDateString()
  }
];

