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
const UL = styled.ul`
    padding: 3%;
`

const LI = styled.li`
    list-style: circle;
    text-align: left;
    font-size: calc(4px + 1vw);
`

export default function AchievementsPage() {
    return (
        <MainDiv>
            <HeadTitle> Achievements </HeadTitle>
            <img src={'./images/hiking.jpg'} alt="my image" style={{ width: '25vw', padding: '2%'}} />
            <MainPara>
                Outside of school I have accomplished various noteworthy achievements. These include being an Eagle Scout, a Rotary foreign exchange student, 
                a stage manager for a 100+ person play, a Dean's list student, and an owner of two dogs.
            </MainPara>
            <UL>
                <LI>Spring 2022 Boston University Academic Deans List</LI>
                <LI>2021 CFHS Technical Theatre student of the year</LI>
                <LI>Eagle Scout - led 30+ person project to build public access
                    kayak dock for the city of Clear Lake Shores</LI>
                <LI>National Honor Society</LI>
                <LI>Rotary Exchange Student</LI>
                <LI>Summa Cum Laude Graduate</LI>
                <LI>2019 CFHS Musical Stage Manager</LI>
                <LI>B1 Proficiency in German</LI>
            </UL>
        </MainDiv>
    )
}