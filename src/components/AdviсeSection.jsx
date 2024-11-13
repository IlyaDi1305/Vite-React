import Button from "./Button/Button.jsx";
import {useState} from "react";
import {differences} from "../data.js";

export default function AdviceSection() {
    const [contentType, setContentType] = useState(null);

    return (
        <section>
            <h3>Эй, если ты только начал учиться программированию, то вот несколько простых советов,
                которые помогут тебе не перегореть и получать удовольствие от этого дела.</h3>
            <Button
                isActive={contentType === 'way'}
                onClick={() => handleClick('way')}>Цели</Button>
            <Button
                isActive={contentType === 'easy'}
                onClick={() => handleClick('easy')}>Перерывы</Button>
            <Button
                isActive={contentType === 'program'}
                onClick={() => handleClick('program')}>Разнообразие</Button>

            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType]}</p>}
        </section>
    )

    function handleClick(type) {
        setContentType(type)
    }
}