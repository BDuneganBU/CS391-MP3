import './App.css'

import Header from './components/header';
import Navigation from './components/navigation';

//Main Component imports
import HomePage from './components/mainHome';
import ProjectsPage from './components/mainProjects';
import EducationPage from './components/mainEducation';
import WorkExperiencePage from './components/mainWorkExperience';
import GeneralExperiencePage from './components/mainGeneralExperience';
import AchievementsPage from './components/mainAchievements';

import Footer from './components/footer';

import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import { styled } from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
`
const NavMainWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const Root = () => {
  return (
    <Main>
      {/* Header on top*/}
      <Header/>
      {/*Wrapper to display Nav and Main beside each other or vertical depending on screen width*/}
      <NavMainWrapper>
        <Navigation/>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/education" element={<EducationPage/>} />
          <Route path="/workExperience" element={<WorkExperiencePage/>} />
          <Route path="/generalExperience" element={<GeneralExperiencePage/>} />
          <Route path="/achievements" element={<AchievementsPage/>} />
        </Routes>
      </NavMainWrapper>
      {/* Footer on bottom*/}
      <Footer/>
    </Main>
  )
}

const router = createBrowserRouter (
  [{path: "*", Component: Root}]
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App;