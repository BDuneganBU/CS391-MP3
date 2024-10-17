import { Link } from "react-router-dom";
import { styled } from "styled-components";

//The bar displayed between the cards
const StyledNav = styled.nav`
    background-color: rgb(71, 36, 92);
    display: flex;
    padding: 0%;
    height: 100%;
    width: 15%;
    color: rgb(163, 184, 202);
    align-content: center;

    @media (max-width: 750px) {
        height: 10%;
        width: 100vw;
        float: none;
        display:block;
        text-align: center;
    }
`
//Each link is on a card
const NavCard = styled.li`
    display: block;
    padding: 10% 2%;
    margin-top: 10%;
    margin-bottom: 20%;
    margin-left: 5%;
    margin-right: 5%;
    background-color: rgb(114, 99, 156);
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: calc(7px + 1vw);

    a:hover {
        color: rgb(163, 184, 202);
        font-weight: bold;
        text-decoration: none;
    }
    a:link {
        color: rgb(163, 184, 202);
        text-decoration: none;
    }
    a:visited {
        color: rgb(163, 184, 202);
        text-decoration: none;
    }
    a:active {
        color: rgb(163, 184, 202);
        text-decoration: none;
    }
    @media (max-width: 750px) {
        width: 7%;
        padding: 1%;
        margin: 0.5%;
        display: inline;
        align-content: center;
    }
`
const NavList = styled.ul`
    padding: 0%;
`

const NavLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return (
        <Link style={{padding: "", margin: "", color: "color:rgb(163, 184, 202)"}} to={to}>
            {children}
        </Link>
    )
}

export default function Navigation() {
    return (
        <StyledNav>
            <NavList>
                <NavCard><NavLink to="/home">Home</NavLink></NavCard>
                <NavCard><NavLink to="/projects">Projects</NavLink></NavCard>
                <NavCard><NavLink to="/education">Education</NavLink></NavCard>
                <NavCard><NavLink to="/workExperience">Work Experience</NavLink></NavCard>
                <NavCard><NavLink to="/generalExperience">General Experience</NavLink></NavCard>
                <NavCard><NavLink to="/achievements">Achievements</NavLink></NavCard>
            </NavList>
        </StyledNav>
    )
}