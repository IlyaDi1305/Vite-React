import {styled} from "styled-components";

const StyledLink = styled.a`
    color: #5AA6E7;
    text-decoration: none;

    &:hover {
        color: red;
        text-decoration: underline;
    }
`;
export default function Contacts() {
    return (
        <section>
            <h1>Мои контакты</h1>
            <ul>
                <li>
                    <StyledLink href="https://t.me/IDidorenko"
                                target="_blank"
                                rel="noopener noreferrer">Телеграм</StyledLink>
                    <a> — лучший способ со мной связаться</a>
                </li>
                <li>
                    <StyledLink shref="mailto:ilia.didorenko@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">ilia.didorenko@gmail.com</StyledLink>
                    <a> - или можно отправить сообщение на почту</a>
                </li>
            </ul>
        </section>
    )
}