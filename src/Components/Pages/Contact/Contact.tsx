import { FC } from "react";
import * as Styled from "./Contact.styled.ts";

export const Contact: FC = () => {
    return (
        <Styled.Container>
            <Styled.ContentContainer>
                <Styled.Header>Contact</Styled.Header>
                <Styled.ContainerBox>
                    <Styled.InfoLine>
                        📍 <a
                        href="https://www.google.com/maps/place/6161+AP+Geleen+Hofstraat 27A"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hofstraat 27A 6161 AP Geleen
                    </a>
                    </Styled.InfoLine>
                    <Styled.InfoLine>
                        📞 <a href="tel:0623443860">06-23 44 38 60</a>
                    </Styled.InfoLine>
                    <Styled.InfoLine>
                        📧 <a href="mailto:hondentraining-trimsalon@vrolijkstaartje.nl">hondentraining-trimsalon@vrolijkstaartje.nl</a>
                    </Styled.InfoLine>
                    <Styled.InfoLine>
                        🌐 <a href="https://www.vrolijkstaartje.nl" target="_blank" rel="noopener noreferrer">
                        www.vrolijkstaartje.nl
                    </a>
                    </Styled.InfoLine>
                    <Styled.InfoLine>
                        📘 <a href="https://www.facebook.com/profile.php?id=61574034723570" target="_blank" rel="noopener noreferrer">
                        Facebookpagina
                    </a>
                    </Styled.InfoLine>
                    <Styled.InfoLine>
                        📸 <a href="https://www.instagram.com/vrolijk_staartje/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    </Styled.InfoLine>
                </Styled.ContainerBox>
            </Styled.ContentContainer>
        </Styled.Container>
    );
};
