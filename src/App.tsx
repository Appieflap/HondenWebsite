import * as Styled from './App.styled.ts';
import { Header } from "./Components/Header/Header.tsx";
import { UseWindowSize } from "./Hooks/UseWindowSize.tsx";
import { NavBar } from "./Components/NavBar/NavBar.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Main } from "./Components/Pages/Main/Main.tsx";
import { Footer } from "./Components/Footer/Footer.tsx";
import { TermsAndConditions } from "./Components/Pages/Grooming/TermsAndConditions/TermsAndConditions.tsx";
import { Contact } from "./Components/Pages/Contact/Contact.tsx";
import { Grooming } from "./Components/Pages/Grooming/Grooming.tsx";
import { DogTraining } from "./Components/Pages/DogTraining/DogTraining.tsx";
import { ScrollToTop } from "./Components/ScrollToTop.tsx";

function App() {
    const windowSize = UseWindowSize();

    return (
        <BrowserRouter basename="/HondenWebsite/">
            <ScrollToTop />
            <Styled.Container>
                {windowSize.width > 768 ? <Header /> : null}
                <NavBar />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/algemene-voorwaarden" element={<TermsAndConditions />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/grooming" element={<Grooming />} />
                        <Route path="/dogtraining" element={<DogTraining />} />
                    </Routes>
                <Footer />
            </Styled.Container>
        </BrowserRouter>
    )
}

export default App
