import Button from "./Button/Button.jsx";
import Modal from "./Header/Modal/Modal.jsx";
import {useState} from "react";

export default function EffectSection(){
    const [modal, setModal] = useState(false);

    function openModel(){
        setModal(true);
    }
    return (
        <section>
            <h3>Effects</h3>
            <Button onClick={openModel}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci illum itaque laborum maiores necessitatibus nesciunt quibusdam. Accusantium aliquam, eos eveniet neque, pariatur, placeat possimus provident qui reiciendis rem reprehenderit tempore.</p>
                <Button onClick={()=> setModal(false)}>Close modal</Button>
            </Modal>
        </section>
    )
}