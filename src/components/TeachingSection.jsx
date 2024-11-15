import {useState, useRef} from "react";
import Button from "./Button/Button.jsx";

function StateVsRef() {
    const input = useRef();
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShow(true)    }
    }

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input
                ref={input}
                type="text"
                onKeyDown={handleKeyDown}
                className='control'/>
        </div>
    )
}

export default function TeachingSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })

    function handleNameChange(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    return (
        <section>
            <h3>Обратная связь</h3>
            <form style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Ваше имя</label>
                <input type="text"
                       className="control"
                       value={form.name}
                       style={{
                           border: form.hasError ? '2px solid red' : null,
                       }}
                       onChange={handleNameChange}/>
                <label htmlFor="reason">Причина обращения</label>
                <select id="reason"
                        className="control"
                        value={form.reason}
                        onChange={(event) =>
                            setForm((prev) => ({...prev, reason: event.target.value}))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                {/*DEBAG*/}
                {/*<pre>{JSON.stringify(form, null, 2)}</pre>*/}

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
            <StateVsRef/>
        </section>
    )
}