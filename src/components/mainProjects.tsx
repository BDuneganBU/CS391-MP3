import { styled } from "styled-components";
import Calculator from "./calculator";

const HeadTitle = styled.h1`
    text-align: center;
    text-decoration: underline;
    margin: 2%;
`

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

export default function ProjectsPage() {
    return (
        <MainDiv>
            <HeadTitle> Projects </HeadTitle>
            <img src={'./images/wedding.jpg'} alt="my image" style={{ width: '25vw', padding: '2%'}} />
            <MainPara>
                I have done a few projects relating to the field of Computer Science. These include a web app which played spotify songs based on a satillites launch year, 
                a CSV visualization tool to help calculate contract worker's 1099 tax returns, and various games or puzzles from different classes.
                <a href="https://github.com/">Github</a>
            </MainPara>
            <Calculator/>
        </MainDiv>
    )
}