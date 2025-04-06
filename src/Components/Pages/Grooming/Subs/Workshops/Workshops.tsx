import { FC } from "react";
import * as Styled from "./Workshops.styled.ts";

export const Workshops: FC = () => {
    return (
        <>
            <Styled.Header>Workshops</Styled.Header>

            <Styled.Paragraph>
                <strong>Workshop eigen hond knippen/plukken:</strong><br />
                Wilt u graag leren om uw eigen hond te leren knippen of plukken? Dan meldt u zich aan
                voor de workshop eigen hond knippen/plukken. Tijdens deze workshop zal u leren hoe
                u uw eigen hond een trimbehandeling geeft. Tijdens deze workshop zal u zelf voor een
                schaar, borstel en kam moeten zorgen.<br />
                De workshop zal met een groep van 3 à 4 personen zijn.<br />
                Duur workshop: 5 uur<br />
                Prijs p.p.: € 150<br />
                Er is koffie of thee aanwezig en iets lekkers voor tussendoor.<br />
                Tijdens deze workshop behandelen we deze punten:
                <ul>
                    <li>Model knippen of plukken van uw hond</li>
                    <li>Oogjes vrij knippen</li>
                    <li>Voetjes vrij scheren of knippen</li>
                    <li>Nagels knippen</li>
                    <li>Borstelen en kammen, zodat de hond klitvrij is</li>
                    <li>Welke benodigdheden u nodig heeft, denk aan shampoo, klittenspray, borstels, enz.</li>
                </ul>
                Mocht u graag bepaalde materialen of andere benodigdheden willen kopen, dan kan je dit
                bestellen bij mij.<br />
                Ben je geïnteresseerd? Meld je aan via een e-mail: <a href="mailto:vrolijkstaartje@hotmail.com">vrolijkstaartje@hotmail.com</a><br />
                of stuur een bericht via WhatsApp: <a href="tel:+31623443860">06-23 44 38 60</a>
            </Styled.Paragraph>

            <Styled.Paragraph>
                <strong>Workshop Vachtverzorging:</strong><br />
                Wilt u graag meer leren over het borstelen of klittenvrij houden van uw hond? Dan is
                deze workshop iets voor u.<br />
                Duur workshop: 90 min<br />
                Prijs p.p.: € 70<br />
                Deze workshop kan individueel of met meerdere personen gehouden worden.<br />
                Tijdens deze workshop behandelen we deze punten:
                <ul>
                    <li>Welke borstel en kam heb ik nodig voor mijn hond</li>
                    <li>Hoe borstel of kam ik mijn hond het beste om klitten te voorkomen</li>
                    <li>Hoe knip ik de ogen vrij van mijn hond</li>
                    <li>Haren verwijderen tussen de poten</li>
                    <li>Welke klittenspray kan ik gebruiken bij klitten</li>
                </ul>
                Mocht u geïnteresseerd zijn in materialen of andere spullen, kunt u deze bestellen bij mij.<br />
                Ben je geïnteresseerd? Meld je aan via een e-mail: <a href="mailto:vrolijkstaartje@hotmail.com">vrolijkstaartje@hotmail.com</a><br />
                of stuur een bericht via WhatsApp: <a href="tel:+31623443860">06-23 44 38 60</a>
            </Styled.Paragraph>
        </>
    );
};