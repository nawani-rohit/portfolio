import { StaticImageData } from 'next/image'

import ragImage from '@/app/components/assests/rag.png'
import numovesImage from '@/app/components/assests/NuMoves.png'
import serverlessImage from '@/app/components/assests/event.png'
import movieFinderImage from '@/app/components/assests/Movie-Finder.png'
import dutchAuctionImage from '@/app/components/assests/dutch-auction.png'
import herImage from '@/app/components/assests/HER.png'
//import portfolioImage from '@/app/components/assests/Portfolio.png'
import covidTrackerImage from '@/app/components/assests/covid19.png'



export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Experience', path: '#experience' },
  { label: 'Education', path: '#education' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string | StaticImageData
  description: string
  Skills: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Personal Finance Management',
    repo: 'https://github.com/nawani-rohit/RAG-Personal-Finance-Management',
    url: 'https://github.com/nawani-rohit/RAG-Personal-Finance-Management',
    image: ragImage,
    description:
      'A sophisticated financial document analysis system that leverages Retrieval-Augmented Generation (RAG) to provide intelligent insights from financial documents. Built with FastAPI and React, this full-stack application processes and analyzes financial documents using OpenAI\'s language models.',
    Skills: ['React', 'RAG', 'OpenAI API', 'FASTAPI', 'Python']
  },
  {
    name: 'NU Moves',
    repo: 'https://github.com/nawani-rohit/NU-Moves',
    url: 'https://github.com/nawani-rohit/NU-Moves',
    image: numovesImage, // You can replace this with the actual image path
    description:
      'A comprehensive online marketplace developed exclusively for Northeastern University students. NUMOVES facilitates secure buying and selling of household goods within the university community, built with a focus on user verification and seamless transactions.',
    Skills: ['React', 'Node.js', 'JavaScript', 'MongoDB']
  },
  {
    name: 'Serverless Event Management',
    repo: 'https://github.com/nawani-rohit/severless-event-management',
    url: 'https://github.com/nawani-rohit/severless-event-management',
    image: serverlessImage, // Replace with the actual image path
    description:
      'A dynamic, cloud-native application designed to connect local communities through event organization and participation. Built entirely on AWS serverless architecture, this platform enables users to discover, create, and join local events.',
    Skills: ['AWS Lambda', 'API Gateway', 'AWS DynamoDB', 'React']
  },
  {
    name: 'Movie Finder',
    repo: 'https://github.com/nawani-rohit/Movie-Finder',
    url: 'https://github.com/nawani-rohit/Movie-Finder',
    image: movieFinderImage, // Replace with the actual image path
    description:
      'A responsive web application that provides users with a movie discovery experience. Built with React.js and integrated with The Movie Database (TMDB) API, this project demonstrates modern frontend development practices and third-party API integration.',
    Skills: ['React.js', 'CSS3', 'TMDB API', 'Axios']
  },
  {
    name: 'Dutch Auction System',
    repo: 'https://github.com/nawani-rohit/duction-auction',
    url: 'https://github.com/nawani-rohit/duction-auction',
    image: dutchAuctionImage, // Replace with the actual image path
    description:
      'A decentralized Dutch Auction application built on Ethereum, demonstrating smart contract development and Web3 integration. This project implements a traditional Dutch auction mechanism where the price automatically decreases over time until a buyer makes a purchase.',
    Skills: ['Solidity', 'React', 'MetaMask', 'Ethereum']
  },
  {
    name: 'HER (Heal, Empower, Relief)',
    repo: 'https://github.com/nawani-rohit/HER-Heal-Empower-Relief-',
    url: 'https://github.com/nawani-rohit/HER-Heal-Empower-Relief-',
    image: herImage, // Replace with the actual image path
    description:
      'A comprehensive enterprise solution designed to support acid attack survivors through their journey of medical treatment, rehabilitation, and justice. This Java-based system integrates multiple organizations and roles to provide coordinated care and support services.',
    Skills: ['Java', 'MySQL', 'Java Swing', 'MVC']
  },
  {
    name: 'Portfolio Website',
    repo: 'https://github.com/SandeepVashishtha/Brew-Bliss',
    url: 'https://sandeepvashishtha.github.io/Brew-Bliss/',
    image: '/brew-Bliss.png', // Replace with the actual image path
    description:
      'A comprehensive enterprise solution designed to support acid attack survivors through their journey of medical treatment, rehabilitation, and justice. This Java-based system integrates multiple organizations and roles to provide coordinated care and support services.',
    Skills: ['Java', 'MySQL', 'Java Swing', 'MVC']
  },
  {
    name: 'COVID-19 Live Tracker',
    repo: 'https://github.com/nawani-rohit/Covid-19-liveUpdates',
    url: 'https://github.com/nawani-rohit/Covid-19-liveUpdates',
    image: covidTrackerImage, // Replace with the actual image path
    description:
      'A responsive web application built with React that provides real-time global COVID-19 statistics and visualization. This project demonstrates the implementation of interactive data visualization and real-time API integration.',
    Skills: ['React', 'Mapbox GL', 'Netlify']
  },
]

export const skillsData = [
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'angular/angular-original.svg',
    name: 'Angular'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'oracle/oracle-original.svg',
    name: 'Oracle'
  },

  {
    img: 'c/c-original.svg',
    name: 'C'
  },
  {
    img: 'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  {
    img: 'express/express-original.svg',  // for ExpressJS
    name: 'Express'
  },
  {
      img: 'postman/postman-original.svg',
      name: 'Postman'
  },
  {
      img: 'mysql/mysql-original.svg',
      name: 'MySQL'
  },
  {
      img: 'redis/redis-original.svg',
      name: 'Redis'
  },
  {
      img: 'firebase/firebase-plain.svg',
      name: 'Firebase'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  // {
  //   img: 'spring/spring-original.svg',
  //   name: 'Spring Boot'
  // },
  {
      img: 'apache/apache-original.svg',  // for Apache Kafka
      name: 'Apache Kafka'
  },
]

export const headerData = {
  resumePdf: 'https://raw.githubusercontent.com/nawani-rohit/portfolio/main/resume/Rohit_Nawani%20-%20Resume.pdf'
}
