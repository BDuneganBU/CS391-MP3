import { styled } from "styled-components";

//Wrapper for the header component
const StyledHeader = styled.header`
    width: 100%;
    background-color:rgb(114, 99, 156);
`

const Title = styled.h1`
    padding: 1%;
    padding-bottom: 0%;
    font-size: calc(2px + 2vw);
`
const Para = styled.p`
    margin-left: 2%;
    padding: 1%;
    padding-top: 0%;
    font-size: calc(2px + 1vw);
`

export default function Header() {
    return (
        <StyledHeader>
            <Title>Brandon's React Resume</Title>
            <Para>Feel free to explore my resume!</Para>
        </StyledHeader>
    )
}
