import { styled } from "styled-components";

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
    }
`

export default function HomePage() {
    return (
        <MainDiv>
            <HeadTitle> Home </HeadTitle>
            <img src={'./images/menu.jpeg'} alt="my image" style={{ width: '25vw', padding: '2%'}} />
            <MainPara>
                My name is Brandon Dunegan, and I am a student at Boston University. I study Computer Science and have a CORE minor. 
                I have taken a variety of CS classes, but my favorites have been CS330, CS460, CS411, and CS111. In my free time I enjoy playing with my two dogs
                Opal and Skippy. I also fence with the BU Feencing Club (foil) and enjoy sailing and rock climbing. This website contains pieces of my resume and can be navigated through the nav bar!
            </MainPara>
        </MainDiv>
    )
}