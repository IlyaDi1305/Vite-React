import logo from '/avatar.png'
import {useState} from "react";
import './Header.css'
import {styled} from "styled-components";

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

const LogoStyle = styled.img`
    width: 3rem;
    height: auto;
`

export default function Header() {
    const [now, setNow] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000);

    return (
        <HeaderContainer>
            <LogoStyle src={logo} alt="logo"></LogoStyle>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}