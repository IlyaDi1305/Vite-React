import Button from "./Button/Button.jsx";

export default function TabsSection({active, onChange}) {
    return (
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active === 'сv'}
                    onClick={() => onChange('сv')}>CV</Button>
            <Button isActive={active === 'feedback'}
                    onClick={() => onChange('feedback')}>Обратная связь</Button>
            <Button isActive={active === 'advice'}
                    onClick={() => onChange('advice')}>Советы новичкам</Button>
            <Button isActive={active === 'effect'}
                    onClick={() => onChange('effect')}>Effect</Button>
        </section>
    )
}