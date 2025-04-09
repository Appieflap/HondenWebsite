import { FC } from "react";
import * as Styled from "./About.styled.ts";
import profileImage from "./sharon.jpg";

export const About: FC = () => {
    return (
        <Styled.Container>
            <Styled.ContentContainer>
                <Styled.Image src={profileImage} alt="Sharon Peeters" />
                <Styled.TextSection>
                    <Styled.Header>Over mij</Styled.Header>
                    <Styled.Paragraph>
                        Ik ben Sharon Peeters, ik ben getrouwd, heb 2 dochters en een geweldige schoonbroer. Ik heb voor een lange tijd in de retail gewerkt als leidinggevende.
                        Dit werk heb ik altijd met plezier gedaan, maar toch merkte ik dat ik graag iets anders zou willen doen. Ik heb als kind altijd al
                        willen werken met dieren. Dit komt ook omdat ik met dieren ben opgegroeid en het geweldig vind om met dieren bezig te zijn.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        Ik heb nooit echt geweten wat ik graag zou willen doen met dieren tot nu! Als leidinggevende vond ik het altijd leuk om mensen te helpen
                        en te coachen. Zo kwam ik er ook achter dat ik het trainen van honden en mensen een leuke uitdaging vind. Daarnaast ben ik graag bezig
                        met honden en vandaar de keuze om een trimsalon te starten.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        Ik heb de opleiding voor het trimmen bij Huisdier Kennis Instituut (HKI) in Bunnik gevolgd. De opleiding tot Kynologisch instructeur heb ik
                        gevolgd bij Hondenadvies Centrum Roermond (HACR). Ik heb mij daarnaast nog gespecialiseerd in hond en kind bij Dierbare ontmoetingen.
                    </Styled.Paragraph>
                </Styled.TextSection>
            </Styled.ContentContainer>
        </Styled.Container>
    );
};
