import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_3.png',
    microSolutionTitle: 'Micro Solution A',
    description: `function name([param[, param[, ... param]]]) {
      statements
   }`,
    lineNumber: "line-numbers",
    language: "language-css",
    createdBy: 'Ekaterina Tankova',
    createdAt: new Date('06-25-2019').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_4.png',
    microSolutionTitle: 'Micro Solution B',
    description: `const materials = [
      'Hydrogen',
      'Helium',
      'Lithium',
      'Beryllium'
    ];
    
    console.log(materials.map(material => material.length));`,
    lineNumber: "line-numbers",
    language: "language-css",
    createdBy: 'Cao Yu',
    createdAt: new Date('03-25-2020').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_2.png',
    microSolutionTitle: 'Micro Solution C',
    description: `([param[, param]]) => {
      statements
   }
   
   param => expression`,
    lineNumber: "line-numbers",
    language: "language-css",
    createdBy: 'Alexa Richardson',
    createdAt: new Date('09-10-2019').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_5.png',
    microSolutionTitle: 'Micro Solution D',
    description: `p { color: red }
h1 { background: blue}
.nav{ 
color: black,
border-radius: '5px',
height: '100%',
width:'100%'
    }`,
    lineNumber: "line-numbers",
    language: "language-css",
    createdBy: 'Anje Keizer',
    createdAt: new Date('02-05-2018').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    microSolutionTitle: 'Micro Solution E',
    description: `p { color: red }
h1 { background: blue}
.nav{ 
color: black,
border-radius: '5px',
height: '100%',
width:'100%'
    }`,
    lineNumber: "line-numbers",
    language: "language-css",
    createdBy: 'Clarke Gillebert',
    createdAt: new Date('06-25-2019').toDateString()
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_1.png',
    description: `p { color: red }
h1 { background: blue}
.nav{ 
color: black,
border-radius: '5px',
height: '100%',
width:'100%'
    }`,
    lineNumber: "line-numbers",
    language: "language-css",
    microSolutionTitle: 'Micro Solution F',
    createdBy: 'Adam Denisov',
    createdAt: new Date('06-25-2020').toDateString()
  }

];

