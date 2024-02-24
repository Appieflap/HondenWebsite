import * as Styled from './App.styled.ts';
import { Header } from "./Components/Header/Header.tsx";
import { UseWindowSize } from "./Hooks/UseWindowSize.tsx";
import {NavBar} from "./Components/NavBar/NavBar.tsx";
import {MainImage} from "./Components/MainImage/MainImage.tsx";
import {Offer} from "./Components/Offer/Offer.tsx";

function App() {
    const windowSize = UseWindowSize();

    return (
        <Styled.Container>
            {windowSize.width > 768 ? <Header /> : null}
            <NavBar />
            <MainImage />
            <Offer />
        </Styled.Container>
    )
}

export default App
