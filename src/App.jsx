import Header from "./components/Header";
import {ways, differences} from "./data.js";
import WayToTeach from "./components/WayToTech";
import Button from "./components/Button/Button";
import {useState} from "react";

export default function App() {
    const [contentType, setContentType] = useState(null);

    // let content = 'Нажми на кнопку'
    console.log('App render');

    function handleClick(type) {
        setContentType(type)
    }

    let tabContent = null;
    if (contentType) {
        tabContent = <p>{differences[contentType]}</p>
    } else {
        tabContent = <p>Нажми кнопку</p>
    }
    return (
        <div>
            <Header/>
            <main>
                <section>
                    <h3>Заголовок</h3>
                    <ul>
                        {ways.map((way) => (
                            <WayToTeach key={way.title}{...way}/>
                        ))}
                        {/*<WayToTeach {...ways[0]} />*/}
                        {/*<WayToTeach {...ways[1]} />*/}
                        {/*<WayToTeach {...ways[2]} />*/}
                        {/*<WayToTeach {...ways[3]} />*/}
                        {/*<WayToTeach {...ways[4]} />*/}
                    </ul>
                </section>
                <section>
                    <h3>KNOPKI</h3>
                    <Button
                        isActive={contentType === 'way'}
                        onClick={() => handleClick('way')}>Цели</Button>
                    <Button
                        isActive={contentType === 'easy'}
                        onClick={() => handleClick('easy')}>Перерывы</Button>
                    <Button
                        isActive={contentType === 'program'}
                        onClick={() => handleClick('program')}>Разнообразие</Button>

                    {/*{contentType ? (*/}
                    {/*    <p>{differences[contentType]}</p>*/}
                    {/*) : (<p>Нажми на кнопку</p>*/}
                    {/*)}*/}

                    {/*{!contentType ? <p>Нажми на кнопку</p> : null}*/}
                    {/*{contentType ? <p>{differences[contentType]}</p> : null}*/}

                    {/*{!contentType && <p>Нажми на кнопку</p>}*/}
                    {/*{contentType && <p>{differences[contentType]}</p>}*/}

                    {tabContent}
                </section>
            </main>
        </div>
    )
}
