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
                        href="https://www.google.com/maps/place/Vrolijk+Staartje+hondentrainer+%26+trimsalon/@50.963084,5.8180545,16.99z/data=!4m15!1m8!3m7!1s0x47c0c73af39dbbf9:0xa37f4a21fc316f8b!2sHofstraat+27A,+6161+AP+Geleen!3b1!8m2!3d50.9630812!4d5.8180574!16s%2Fg%2F11c5j3vtnp!3m5!1s0x47c0c746d02391d3:0x3e9830cfcf6c37b9!8m2!3d50.9630812!4d5.8180574!16s%2Fg%2F11x8xj159_"
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
                    <Styled.InfoLine>🧾 KVK 97130362</Styled.InfoLine>
                </Styled.ContainerBox>
            </Styled.ContentContainer>
        </Styled.Container>
    );
};
