import { FC } from "react";
import * as Styled from "./Grooming.styled.ts";
import { AnxiousDogTraining } from "./Subs/AnxiousDogTraining/AnxiousDogTraining.tsx";
import { Workshops } from "./Subs/Workshops/Workshops.tsx";
import { ScrollableBox } from "../../ScrollableBox.tsx";
import { TermsAndConditions } from "./TermsAndConditions/TermsAndConditions.tsx";

export const Grooming: FC = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Header>Trimsalon</Styled.Header>

                <Styled.Section>
                    <Styled.SubHeader>Prijzen</Styled.SubHeader>
                    <Styled.Paragraph>De prijs is afhankelijk van uw hond en uw wensen.<br></br>
                    Bel 06-23 44 38 60 of mail hondentraining-trimsalon@vrolijkstaartje.nl voor meer informatie en om een afspraak in te plannen.</Styled.Paragraph>
                </Styled.Section>

                <Styled.Section>
                    <Styled.SubHeader>Behandelingsinformatie</Styled.SubHeader>
                    {[
                        ["Knippen/effileren", "De vacht wordt met een schaar of effileerschaar in elk gewenst model gebracht. De honden worden geknipt volgens rassenstandaard. Mocht u liever iets anders willen, kunnen wij dit altijd bespreken."],
                        ["Plukken", "Plukken is het verwijderen van de bovenste dode haarlaag. Plukken gebeurt wanneer de vacht rijp is om geplukt te worden. Dit merk je wanneer je de bovenste haarlaag zonder moeite eruit kan plukken. Hierdoor is het niet pijnlijk voor de hond. Plukken wordt ongeveer 2 tot 4 keer per jaar gedaan. De hond wordt niet gewassen om huidontstekingen te voorkomen. Mocht u toch graag u hond gewassen willen hebben, kunnen we een aparte behandeling inplannen minimaal 1 week erna."],
                        ["Wassen/drogen/ontwollen", "Om de huid zo goed mogelijk te reinigen, word de hond gewassen en daarna droog geblazen met een waterblazer. Dit zorgt ervoor dat uw hond weer lekker fris is. Wij hebben verschillende shampoos die goed aansluiten bij de vacht van de hond. \n\n Bij ontwollen verwijderen we de oude ondervacht. Dit wordt gedaan door de was en blaas methode toe te passen. Door eerst te wassen laten de losse haren los, doordat ze zwaar worden van het water. De kracht van de waterblazer zal daarna alle losse haren uit de vacht blazen."],
                        ["Scheren", "Hierbij wordt de vacht ingekort met een tondeuse, de lengte kunt u zelf bepalen mits dit mogelijk is voor de hond."],
                        ["Nagels knippen", "De nagels van uw hond worden geknipt op de juiste lengte."],
                        ["Puppy gewenning", "Puppy gewenning kan vanaf 10 weken. De bedoeling van deze behandeling is dat uw hond al kan wennen aan de salon en het aanraken van uw hond. De behandeling bestaat uit: borstelen, oogjes vrij knippen, haren onder de pootjes wegknippen en het knippen van de nagels. De waterblazer wordt even aangezet zodat de pup kan wennen aan het geluid."],
                        ["Ontklitten", "Wanneer u hond klitten heeft worden deze eruit geborsteld. Dit kost extra werk en worden er extra kosten in rekening gebracht. Als de klitten te erg zijn worden ze weggeknipt of zal de hond helaas kort geschoren worden. Mocht dit nodig zijn zal dit altijd in overleg gebeuren. Het welzijn van de hond staat atlijd voorop zodat de hond geen pijn zal hebben onder de behandeling!"],
                        ["Borstelen", "Heeft uw geen tijd om de hond goed te borstelen om klitten te voorkomen tot aan de nieuwe behandeling? Dan kan uw een borstel afspraak tussen de behandelingen door maken. Ik zal uw hond grondig borstelen zodat hij weer klitten vrij is."]
                    ].map(([title, text]) => (
                        <Styled.Paragraph key={title}><strong>{title}:</strong> {text}</Styled.Paragraph>
                    ))}
                </Styled.Section>

                <Styled.Seperator />

                <Styled.Section>
                    <AnxiousDogTraining />
                </Styled.Section>

                <Styled.Seperator />

                <Styled.Section>
                  <Workshops />
                </Styled.Section>

                <Styled.Section>
                    <Styled.Paragraph><em>
                        Bij het brengen van de hond wordt een tijd afgesproken. Bij uitloop wordt u geïnformeerd.
                        Ophalen binnen 30 minuten na klaar zijn, anders wordt er € 15 in rekening gebracht.
                        Door een afspraak te maken gaat u akkoord met de algemene voorwaarden.
                    </em></Styled.Paragraph>
                </Styled.Section>

                <ScrollableBox>
                    <TermsAndConditions />
                </ScrollableBox>
            </Styled.Content>
        </Styled.Container>
    );
};