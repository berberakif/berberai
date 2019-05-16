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
    title: '',
    subtitle: '',
    begin: '2017-02',
    end: '',
    description: '',
    tags: ['Python'],
    link: '',
    thumbnail: '',
  },

];

export const VOLUNTEERING: CvItem[] = [
  {
    title: '',
    subtitle: '',
    begin: '2007',
    end: '2016',
    description: '',
    link: '',
    thumbnail: '',
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
  {
    title: '',
    subtitle: '',
    begin: '',
    end: '2019-04-17',
    description: '',
    tags: ['', ''],
    link: '',
    thumbnail: '',
    attachment: '',
  },
];

export const TALKS: CvItem[] = [
  {
    title: '',
    subtitle: '',
    begin: '',
    end: '2018-10-09',
    description: '',
    tags: ['migration'],
    thumbnail: '',
  },

];
