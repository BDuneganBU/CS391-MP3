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
`

export default function GeneralExperiencePage() {
    return (
        <MainDiv>
            <HeadTitle> General Experience </HeadTitle>
            <img src={'./images/boat.jpg'} alt="my image" style={{ width: '25vw', padding: '2%'}} />
            <MainPara>
                Outside of school and work, I do a variety of activities. I enjoy sailing, camping, climbing, fencing, traveling, and generally anything with my friends! I was in the 
                <a href="https://www.scouting.org/">Boy Scouts of America</a> for almost 10 years. I also was highly active in my High School's theater program and have done over 40 plays.
                I am from Houston, Texas but was born in Colorado.
            </MainPara>
        </MainDiv>
    )
}