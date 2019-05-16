import { CvItem } from './cv-item';


export const GENERAL = {
  name: 'Akif Berber',
  position: 'Software Engineer',
  description: 'This is my personal website to represent my technical skills briefly'
};

export const CVITEMS: CvItem[] = [
  {
    title: 'Ordina',
    subtitle: 'Data Scientist',
    begin: '2019-01',
    end: '',
    description: 'Data Science Tech is a virtual unit within Ordina where knowledge and project implementation with regard to Data Sciene and AI are brought together. In addition to support across the various projects, coaching and training of Data Science talents is one of the assignments for this unit. I am one of the front runners for this initiative that designs and develops Data Science solutions / applications for the various projects that we carry out in this domain.',
    tags: [],
    link: 'https://www.ordina.nl',
    thumbnail: 'ordina.jpg',
  },

];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'IBM DB2 Administrator',
    subtitle: 'DB2 731',
    begin: '',
    end: '2011',
    description: '',
    link: '',
    thumbnail: 'ibm.jpg',
    attachment: '',
  },

];

export const EDUCATION: CvItem[] = [
  {
    title: 'Radboud University',
    subtitle: 'Master/s AI',
    begin: '2016-09',
    end: '2018-08',
    description: '',
    tags: ['Scrum', 'SVN', 'Git', 'Java', 'eclipse', 'Maven'],
    link: 'http://ru.nl',
    thumbnail: 'radboud.jpg',
  },

];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Turkish', level: '100' },
  { title: 'English', level: '90' },
  { title: 'Dutch', level: '40' },
  { title: 'Greek', level: '30' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'RatS',
    subtitle: 'Script for transfering personal movie ratings from one site to another',
    begin: '2017-02',
    end: '',
    description: 'This Python project offers an easy way of synchronizing personal movie ratings from one site (e.g. IMDB) to ' +
      'another (e.g. Trakt). The script supports 13 sites currently and is constantly expanding.',
    tags: ['Python', 'Git', 'Docker', 'Selenium', 'Beautifulsoup', 'JSON', 'CSV'],
    link: 'https://github.com/StegSchreck/RatS',
    thumbnail: 'RatS.png',
  },

];

export const VOLUNTEERING: CvItem[] = [
  {
    title: 'DFB cup finals & international matches',
    subtitle: 'Admission, visitor services, VIP support, stand-by man, special tasks',
    begin: '2007',
    end: '2016',
    description: 'Admission, visitor services, VIP support, stand-by man, special tasks',
    link: 'http://www.dfb.de',
    thumbnail: 'DFB-Logo.jpg',
  },

];

export const CONTACT = {
  city: 'Nijmegen, Netherlands',
  phone: '',
  mail: 'mehmetakifberber@gmail.com',
  skype: '', // just the account name
  linkedin: 'https://www.linkedin.com/in/berber-akif/',
  xing: '',
  github: '',
  stackoverflow: '',
  twitter: '', // full url
  facebook: '',
  other: [
    { title: 'Medium', link: '' },
  ],
};

export const INTERESTS = [
  {
    title: 'Basketball',
    subtitle: '2000 — 2013',
    icon: 'rowing'
  },

];

export const PUBLICATIONS: CvItem[] = [
 /*  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: 'Article published on Medium / MakeItNew.io',
    begin: '',
    end: '2019-04-17',
    description: 'A summary of our Talk \'Tear Down This Wall!\' given at Code.Talks Commerce Special 2018 in Berlin ' +
      'and DevOpsCon 2018 in Berlin about how we enable more collaboration in our IT teams at Mister Spex.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices'],
    link: 'https://makeitnew.io/tear-down-this-wall-c2211141fdb5',
    thumbnail: 'Medium_MakeItNew.png',
    attachment: 'tear-down-this-wall.pdf',
  }, */
];

export const TALKS: CvItem[] = [
  {
    title: 'Bringing a complex stack to the cloud, our journey and lessons learned',
    subtitle: '45 min. @ AWS Startup Day Berlin 2018',
    begin: '',
    end: '2018-10-09',
    description: 'Mister Spex moved away from AWS to an on-premises infrastructure in 2015. ' +
      'This year we switched back to AWS. We will cover the story of these changes and why we did so. ' +
      'Come and hear our experiences and struggles to make your own migration smoother.',
    tags: ['AWS', 'cloud', 'migration'],
    thumbnail: 'AWS_Startup_Day.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: '60 min. @ DevOpsCon Berlin 2018',
    begin: '',
    end: '2018-05-29',
    description: 'The discussion about DevOps is often focusing solely on the tooling aspect: automation, ' +
      'continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on ' +
      'your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from ' +
      'inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the ' +
      'stability of the software as well as the systems it runs on. We focus on the organizational ' +
      'aspects of DevOps: How to measure and improve your team\'s effectiveness by reducing silos and silo thinking and ' +
      'how to get your engineers to share responsibility - a basis for every successful DevOps transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices', 'team structure'],
    link: 'https://jaxenter.com/devops-interview-schreck-uebel-145573.html',
    thumbnail: 'DevOpsCon_2018_Speaker.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: '45 min. @ code.talks commerce special Berlin 2018',
    begin: '',
    end: '2018-04-13',
    description: 'The discussion about DevOps is often focusing solely on the tooling aspect: automation, ' +
      'continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on ' +
      'your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from ' +
      'inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the ' +
      'stability of the software as well as the systems it runs on. We focus on the organizational ' +
      'aspects of DevOps: How to measure and improve your team\'s effectiveness by reducing silos and silo thinking and ' +
      'how to get your engineers to share responsibility - a basis for every successful DevOps transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices'],
    link: 'https://www.youtube.com/watch?v=KWw0H__mtxI',
    thumbnail: 'code-talks-commerce.png',
  },
];
