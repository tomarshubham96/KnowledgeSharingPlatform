import uuid from 'uuid/v1';
import codeImg from '../images/code-snippets.png';
import microImg from '../images/DataBrew.png';
import projectImg from '../images/blog.jpg';
import industryImg from '../images/edtech-prebudget-2019-feature.jpg';
import qnaImg from '../images/qna.jpeg';
import leaderImg from '../images/leaderboard.jpg';

export default [
  {
    id: uuid(),
    name: 'codeSnippetsdashboard',
    title: 'Code Snippets',
    img: codeImg,
    description: `Small Code Snippets that can be utilized by other teams to deliver faster and with confidence.`
  },
  {
    id: uuid(),
    name: 'microSolutions',
    img: microImg,
    title: 'Micro Solutions',
    description: `Like Code Snippets but dealing with a solution of a small problem statement rather than just a line or two of code.`
  },
  {
    id: uuid(),
    name: 'projectOverviewDashBoard',
    img: projectImg,
    title: 'Project Overviews',
    description: `Every success story, lessons learnt and the technical and business aspect of the project.`
  },
  {
    id: uuid(),
    name: 'industryLearningDashboard',
    img: industryImg,
    title: 'Industry Learning',
    description: 'Industry Related learning, basic and fundamental concepts on various aspects of an industry to enhance delivery performance from domain perspective.'
  },
  {
    id: uuid(),
    name: 'qnadashboard',
    img: qnaImg,
    title: 'QnA',
    description: `Ask Questions, any question.`
  },
  {
    id: uuid(),
    name: 'leaderboard',
    img: leaderImg,
    description: `Leaderboard shows the names and positions of the leading competitors in a competition`,
    title: 'LeaderBoard',
  }
];

