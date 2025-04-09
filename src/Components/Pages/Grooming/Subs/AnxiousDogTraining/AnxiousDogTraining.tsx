/** @jsxImportSource @emotion/react */
import { FC } from "react";
import * as Styled from './AnxiousDogTraining.styled.ts';

export const AnxiousDogTraining: FC = () => {
    return (
        <>
            <Styled.Header>Trainen angstige hond</Styled.Header>
            <Styled.Paragraph>
                <strong>Trainen angstige hond in de trimsalon:</strong><br />
                Is uw hond bang in de trimsalon of voor een bepaalde behandeling? Dan help ik u graag.<br />
                Ik heb de opleiding tot hondentrainer gevolgd waardoor ik u en uw hond kan helpen om een trimbehandeling minder eng te maken.
            </Styled.Paragraph>

            <Styled.Paragraph>
                <strong>Voorbeelden die kunnen voorkomen in de trimsalon:</strong>
                <ul>
                    <li>Bang voor het wassen</li>
                    <li>Bang voor het droogblazen van de vacht</li>
                    <li>Bang voor borstel of kam</li>
                    <li>Bang om nagels te knippen</li>
                    <li>Pootjes mogen niet aangeraakt worden</li>
                </ul>
            </Styled.Paragraph>

            <Styled.Paragraph>
                Is uw hond bang voor een van deze dingen of iets anders en wilt u dit graag trainen?
                Neem gerust contact op. We gaan samen kijken hoe we u en uw hond kunnen helpen om een trimbehandeling weer leuk te maken.
            </Styled.Paragraph>

            <Styled.Paragraph>
                We zoeken naar de oorzaak van de angst en stellen vervolgens een passend trainingsprogramma op. Stap voor stap oefenen we,
                zodat uw hond vertrouwen krijgt in de behandeling.
            </Styled.Paragraph>

            <Styled.Contact>
                Ben je geïnteresseerd?<br />
                📧 Mail: <a href="mailto:vrolijkstaartje@hotmail.com">vrolijkstaartje@hotmail.com</a><br />
                📱 WhatsApp: <a href="tel:+31623443860">06-23 44 38 60</a>
            </Styled.Contact>
        </>
    );
};


