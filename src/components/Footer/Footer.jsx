import {styled} from "styled-components";
import logo from '/avatar.png'
import AdviceSection from "../AdviсeSection.jsx";

const FooterContainer = styled.footer`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    background: #3f3f3f;
    border-top: 2px solid #1e1f22;
`

const LogoStyle = styled.img`
    width: 3rem;
    height: auto;
`

export default function Footer() {
    return (
        <FooterContainer>
            {/*{[...Array(5)].map((_, index) => (*/}
            {/*    <LogoStyle key={index} src={logo} alt="logo" />*/}
            {/*))}*/}
        </FooterContainer>
    );
}