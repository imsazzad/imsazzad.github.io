import React from 'react'
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs'
import '../styles/tabs.css'
import proProjects from '../data/ProProjects'
import gradProjects from '../data/GradProjects'
import ProjectBox from '../components/Projects/ProjectBox'
import {ProjectsSection, ProjectsWrapper} from '../styles/projectsStyle.js'
import Layout from '../components/layout'

const Projects = () => (
  <Layout>
  <ProjectsWrapper>
    <Tabs>
      <TabList>
        <Tab>Professional</Tab>
        {/*<Tab>Personal</Tab>*/}
        <Tab>Undergrad</Tab>
      </TabList>

      <TabPanel>
        <ProjectsSection>
          {
            proProjects.map(item => (<ProjectBox key={item.id} info={item} />))
          }
        </ProjectsSection>
      </TabPanel>
      {/*<TabPanel>*/}
      {/*  <ProjectsSection>*/}
      {/*    {*/}
      {/*      hobbyProjects.map(item => (<ProjectBox key={item.id} info={item} />))*/}
      {/*    }*/}
      {/*  </ProjectsSection>*/}
      {/*</TabPanel>*/}
      <TabPanel>
        <ProjectsSection>
          {
            gradProjects.map(item => (<ProjectBox key={item.id} info={item} />))
          }
        </ProjectsSection>
      </TabPanel>
    </Tabs>
  </ProjectsWrapper>
  </Layout>
);

export default Projects
