import React from 'react';
import TeamMembers from './TeamMembers.jsx';
import Layout from '../../components/Layout/Layout.js';
import AboutDescripton from './AboutDescripton.jsx';

const About = () => {
  return (
    <Layout>
      <div style={{ paddingTop: "15vh" }}>
        <AboutDescripton/>
        <TeamMembers/>
      </div>
    </Layout>
  )
}

export default About;