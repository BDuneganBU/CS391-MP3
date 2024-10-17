import { styled } from "styled-components";
import { Link } from "react-router-dom";

//Wrapper for the footer component
const StyledFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    bottom: 0;
    background-color:rgb(114, 99, 156);
`

const FooterText = styled.p`
    padding: 1%;
    font-size: calc(2px + 1vw);
`

const FooterLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return (
        <Link style={{padding: "0.5rem", margin: "0.25rem"}} to={to}>
            {children}
        </Link>
    )
}

export default function Footer() {
    return (
        <StyledFooter>
            <FooterText>All rights reserved by Brandon Dunegan:
                <FooterLink to="https://www.copyright.gov/">Credits</FooterLink> &copy;
            </FooterText>
        </StyledFooter>
    )
}