import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection.jsx";
import AdviceSection from "./components/AdviсeSection.jsx";

export default function App() {
    return (
        <div>
            <Header/>
            <main>
                <TeachingSection />
                <AdviceSection />
            </main>
        </div>
    )
}
