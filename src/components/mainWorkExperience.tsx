import { styled } from "styled-components";

const HeadTitle = styled.h1`
    text-align: center;
    text-decoration: underline;
    margin: 2%;
`
//MainDiv is the wrapper for this page of the main section (needed for media query to display correct)
const MainDiv = styled.div`
    width: 100%;
    padding: 0%;
    font-size: calc(2px + 1vw);
    background-color: rgb(196, 178, 121);
    @media (max-width: 750px) {
        height: 100%;
        width: 100%;
        float: none;
        display:block;
        text-align: center;
        font-size: calc(4px + 1vw);
    }
`
const MainPara = styled.p`
    padding: 1%;
    font-size: calc(8px + 1vw);
    @media (max-width: 750px) {
        font-size: calc(8px + 2vw);
`
const UL = styled.ul`
    padding: 3%;
`

const LI = styled.li`
    list-style: circle;
    text-align: left;
    font-size: calc(8px + 1vw);
`

export default function WorkExperiencePage() {
    return (
        <MainDiv>
            <HeadTitle> Work Experience </HeadTitle>
            <img src={'./images/apple.jpg'} alt="my image" style={{ width: '25vw', padding: '2%'}} />
            <MainPara>
                Due to being in college, I have minimal work experience. I have, however, worked as a server for two years at a german restraunt in Texas. 
                Additionally, I worked as a contractor for an AI model developement company. My job was to grade the responses a given model gave based on a provided rubric.
                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">LinkedIn</a>
            </MainPara>
            <UL>
                <LI>King’s Bierhaus, Summer 2021 and 2022, Worked as a server</LI>
                <LI>Harris County 2020 Election Poll Worker, October 2020</LI>
                <LI>Contracter for Outlier.ai May 2024-Present</LI>
            </UL>
        </MainDiv>
    )
}