import logo from '/vite.svg'
import {useState} from "react";

export default function Header() {
    const [now, setNow] = useState(new Date());

    setInterval(()=> setNow(new Date()),1000);

    return (
        <header>
            <img src={logo} alt="logo" />
            {/*<h3>My site</h3>*/}

            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
}