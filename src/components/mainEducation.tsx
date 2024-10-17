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
const TableDiv = styled.div`
    margin: 1%;
`
const Table = styled.table`
    border: 1px solid black;
`

export default function EducationPage() {
    return (
        <MainDiv>
            <HeadTitle> Education </HeadTitle>
            <img src={'./images/waterfall.jpeg'} alt="my image" style={{ width: '25vw', padding: '2%'}} />
            <MainPara>
                I am currently pursuing a BA in Computer Science at <a href="https://www.bu.edu/">Boston University</a>. Additionally, I have completed a minor in the CORE curriculum
                and studied German for two years! I enjoy studying logic and philosophy. I attended Clear Falls High School before college.
            </MainPara>
            <TableDiv>
                <Table>
                    <tr>
                        <th>CS Class</th>
                        <th>Year</th>
                    </tr>
                    <tr>
                        <td>
                            CS111
                        </td>
                        <td>
                            Freshman
                        </td>
                    </tr>
                    <tr>
                        <td>
                            CS330
                        </td>
                        <td>
                            Sophomore
                        </td>
                    </tr>
                    <tr>
                        <td>
                            CS332
                        </td>
                        <td>
                            Senior
                        </td>
                    </tr>
                    <tr>
                        <td>
                            CS412
                        </td>
                        <td>
                            Junior
                        </td>
                    </tr>
                </Table>
            </TableDiv>
        </MainDiv>
    )
}