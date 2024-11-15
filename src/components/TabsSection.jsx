import Button from "./Button/Button.jsx";

export default function TabsSection({active, onChange}) {
    return (
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active === 'main'}
                    onClick={() => onChange('main')}>Главная</Button>
            <Button isActive={active === 'advice'}
                    onClick={() => onChange('advice')}>Советы новичкам</Button>
        </section>
    )
}