import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components';


const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src="https://cdn.worldvectorlogo.com/logos/sketch-2.svg" alt="sketch" height="50" width="50" />
          <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" alt="figma" height="50" width="50" />
          <img src="https://cdn.worldvectorlogo.com/logos/facebook-messenger-3.svg" alt="fb" height="50" width="50" />
          <img src="https://cdn.worldvectorlogo.com/logos/invision-studio-small.svg" alt="invision" height="50" width="50" />
          <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react" height="50" width="50" /> 
          <img src="https://cdn.worldvectorlogo.com/logos/adobe-experience-design-1.svg" alt="xd" height="50" width="50" /> 
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
          title="Design System"
          text="10 sections"
          image="https://raw.githubusercontent.com/MengTo/my-react-app/master/static/images/wallpaper.jpg" />
        <Card 
          title="React for Designers"
          text="12 sections"
          image="https://github.com/MengTo/my-react-app/blob/master/static/images/wallpaper2.jpg?raw=true" />
        <Card 
          title="Sound Design"
          text="5 sections"
          image='https://raw.githubusercontent.com/MengTo/my-react-app/master/static/images/wallpaper3.jpg' />
        <Card 
          title="ARKit 2"
          text="10 sections"
          image="https://raw.githubusercontent.com/MengTo/my-react-app/master/static/images/wallpaper4.jpg" />
      </div>
    </div>
    <Section
      image="https://appleinformed.files.wordpress.com/2021/06/macosmontereywallpaper-1.jpg?w=2400"
      logo="https://cdn.worldvectorlogo.com/logos/react-2.svg" 
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
     />
     <SectionCaption>12 sections - 6 hours</SectionCaption>
     <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image} />
      ))}
     </SectionCellGroup>
  </div>
)

export default IndexPage