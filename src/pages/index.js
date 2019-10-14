import React from 'react'
// import RashSelfIcon from '../assets/images/rashmi.svg'
import RashSelfIcon from '../assets/images/profile-logo.jpg'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import {DownloadButton, UserDescription, UserTitle, UserTopic, UserWrapper} from '../styles/indexStyle.js'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Md Abdul<span> Hasib</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there, welcome to Md Abdul Hasib's portfolio. He would like to introduce himself as a machine learning engineer(especially deep learning) and backend engineer specialized in python and java. He possesses excellent verbal and written communication skills. He is a quick learner. He has in-depth knowledge of Software Development, Structured and Unstructured Data Analytics, Database Techniques, OS and Data Structures. He can work in a team. He has team-leading experiences also. He is a good motivator, enthusiastic and open to learning new ideas. He has a sound knowledge of recognizing and analyzing information problems. He can handle multiple tasks.
        </p>
        <DownloadButton href="https://github.com/imsazzad/my_cv_2019/raw/master/MD%20ABDUL%20HASIB.pdf" download
                        title="Resume">Download Resume</DownloadButton>
      </div>
      <img src={RashSelfIcon} alt="sazzad self"/>
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
};

export default IndexPage
