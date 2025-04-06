import { FC } from "react";
import { MainImage } from "./MainImage/MainImage.tsx";
import { Offer } from "./Offer/Offer.tsx";
import { About } from "./About/About.tsx";
import { Seperator } from "./About/About.styled.ts";

export const Main: FC = () => {
    return (
        <>
            <MainImage />
            <Offer />
            <Seperator />
            <About />
        </>
    )
}
