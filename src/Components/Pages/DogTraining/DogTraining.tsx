import { FC } from "react";
import * as Styled from "./DogTraining.styled.ts";
import { ScrollableBox } from "../../ScrollableBox.tsx";
import { TermsAndConditions } from "./TermsAndConditions/TermsAndConditions.tsx";
import { EmailSignupLink } from "../../EmailSignupLink.tsx";
import { SignupModalTrigger } from "../../SignupModalTrigger.tsx";

export const DogTraining: FC = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Header>Hondentrainen</Styled.Header>

                <Styled.Section>
                    <Styled.SubHeader>Prijslijst:</Styled.SubHeader>
                    <Styled.Table>
                        <thead>
                        <tr>
                            <th>Cursus</th>
                            <th>Prijs</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>Puppy cursus 8 lessen, 45 min</td><td>€ 115</td></tr>
                        <tr><td>Basis cursus 8 lessen, 45 min</td><td>€ 115</td></tr>
                        <tr><td>Puber cursus 8 lessen, 45 min</td><td>€ 115</td></tr>
                        <tr><td>Puppy, basis en puber voordeel package 3x 8 lessen, 45 min</td><td>€ 330</td></tr>
                        <tr></tr>
                        <tr><td>Individueel (1-op-1) losse les, 45 min</td><td>€ 50</td></tr>
                        <tr><td>Individueel (1-op-1) 8 lessen, 45 min</td><td>€ 375</td></tr>
                        <tr><td>Km vergoeding &gt;10 km individueel (1-op-1)</td><td>€ 0,30 per km</td></tr>
                        <tr></tr>
                        <tr><td>Hond kind (1-op-1) losse les</td><td>€ 50</td></tr>
                        <tr><td>Hond kind (1-op-1) 8 lessen</td><td>€ 375</td></tr>
                        </tbody>
                    </Styled.Table>
                </Styled.Section>

                <Styled.Section>
                    <Styled.SubHeader>Cursussen</Styled.SubHeader>
                    <Styled.Paragraph>
                        <strong>Puppy cursus:</strong><br />
                        Tussen de 8 en 12 weken<br />
                        Tijdens deze cursus gaan we de basis oefeningen doen. We zullen ook kijken naar de lichaamstaal van je hond en hoe je deze zelf kunt lezen. Er kunnen vragen gesteld worden over problemen waar jullie tegenaan lopen of als jullie graag advies willen.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        <strong>Basis cursus:</strong><br />
                        Tussen de 12 weken en 6 maanden<br />
                        Deze cursus sluit aan op de puppy cursus of vanaf 12 weken. Tijdens deze cursus gaan we de basis oefeningen wat lastiger maken en komen er nog nieuwe oefeningen bij. Tijdens de lessen kunnen er vragen gesteld worden over problemen waar jullie tegenaan lopen of als jullie graag advies willen. Wanneer jullie tegen een gelijk probleem aanlopen als groep zal ik mijn les aanpassen aan jullie behoefte en hier de oefeningen op baseren.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        <strong>Puber cursus:</strong><br />
                        Vanaf 6 maanden<br />
                        Deze cursus sluit aan op de basis cursus of vanaf 6 maanden. Bij de puber cursus zullen we even terug gaan naar de basis en alles opnieuw opfrissen. We zullen elke les bespreken als groep waar jullie tegenaan lopen en hier zal ik de les op baseren. Hierdoor worden er oefeningen behandeld waar jullie ook echt baat bij hebben.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        Meld je aan via het <SignupModalTrigger /> en stuur deze naar <EmailSignupLink />
                    </Styled.Paragraph>
                </Styled.Section>

                <Styled.Section>
                    <Styled.SubHeader>Individueel lessen</Styled.SubHeader>
                    <Styled.Paragraph>
                        Heeft jouw hond moeite om zich te concentreren in een groep, raakt hij snel overprikkeld, of kan hij niet met andere honden samen? Individuele lessen zijn ideaal! We stemmen alles af op jullie behoeften en we kunnen gericht werken aan specifieke oefeningen of vaardigheden. Geen afleiding, gewoon persoonlijke aandacht en les op maat.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        Meld je aan via het <SignupModalTrigger /> en stuur deze naar <EmailSignupLink />
                    </Styled.Paragraph>
                </Styled.Section>

                <Styled.Section>
                    <Styled.SubHeader>Hond kind</Styled.SubHeader>
                    <Styled.Paragraph>
                        <strong>Baby op komst</strong><br />
                        Verwachten jullie je eerste kindje en willen jullie de beste start voor je hond en baby? Wil je graag weten hoe je jouw hond voor kunt bereiden op de komst van de kleine? Tijdens deze cursus krijg je antwoord op al deze vragen en nog veel meer.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        Honden en baby’s kunnen niet als vanzelfsprekend goed met elkaar overweg, u zult uw hond stapsgewijs moeten leren dat er een baby aankomt en hoe de hond hiermee om kan gaan. Dat is soms best lastig maar het is heel belangrijk dat u de hond betrekt in alle veranderingen en hem de kans geeft hieraan te wennen.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        Een hond laten wennen aan een baby begint al voordat het kindje er is. Vaak merkt u als aanstaande moeder dan ook al subtiele (en minder subtiele) gedragsveranderingen bij uw hond. Hoe u hier mee om kunt gaan leren wij u tijdens het huisbezoek.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        <strong>Goede voorlichting voorkomt ongelukken!</strong><br />
                        Het gebeurt veel te vaak dat honden herplaatst worden omdat ze niet overweg kunnen met de nieuwe baby, onnodig! Want met goede begeleiding kunnen we de hond juist een essentieel onderdeel laten uitmaken van de opvoeding van jullie kindje, sterker nog, kinderen hebben vaak enorm veel baat bij een hond. Een hond is een echt maatje en een verrijking voor het leven van een kind..
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        <strong>Herken je dit?</strong>
                        <ul>
                            <li>Je krijgt allerlei adviezen van iedereen om je heen hoe je de hond het beste kunt voorbereiden op de baby.</li>
                            <li>Je droomt van die perfecte eerste ontmoeting, maar hoe ziet zo iets er nu echt uit?</li>
                            <li>Wil je samen met je partner precies weten wat je moet doen in bepaalde situaties en vol vertrouwen starten als gezin met een baby en een hond?</li>
                            <li>Wil je zonder zorgen de eerste weken met jullie kleintje tegemoet gaan?</li>
                            <li>Je wilt het liefste niet voor verrassingen komen te staan als de baby geboren is, aangezien je dan waarschijnlijk minder tijd hebt voor de hond.</li>
                        </ul>
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        <strong>Wat houdt het in:</strong>
                        <ul>
                            <li>Voorlichting voor aanstaande ouders, toegespitst op uw situatie</li>
                            <li>Beoordeling van de hond.</li>
                            <li>Je leert hoe je jouw hond voor kunt bereiden op de komst van de kleine?</li>
                            <li>Je weet wat je wel en vooral niet moet doen om jullie baby en hond aan elkaar te laten wennen?</li>
                            <li>Je leert hoe je samen met je partner kunt zorgen voor een bijzondere eerste ontmoeting?</li>
                        </ul>
                        Meld je aan via het <SignupModalTrigger /> en stuur deze naar <EmailSignupLink />
                    </Styled.Paragraph>

                    <Styled.Seperator />

                    <Styled.Paragraph>
                        <strong>Puppy op komst</strong><br />
                        De komst van een pup vergt heel wat voorbereiding en natuurlijk ook veel plezier. Je wilt er met het hele gezin voor zorgen dat jullie pup een goede start maakt.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        Een pup in huis is natuurlijk ontzettend leuk, ook voor de kinderen. Wat we soms wel eens vergeten is dat het ook best wel heftig kan zijn, zeker voor kinderen! Kinderen hebben een hele andere belevingswereld dan volwassenen. Waarom bijt mijn puppy mij? Hij vind mij vast niet leuk! Dit kan kinderen onzeker en zelfs verdrietig maken. Pups en kinderen begrijpen elkaar vaak niet zo goed. Waar de een een leuk spel ziet, ziet de ander bedreiging. Het is dus goed om het contact tussen kinderen en de nieuwe pup in goede banen te leiden.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        <strong>Wat houdt het in:</strong><br />
                        Ik kom eerst langs als de puppy er nog niet is, dan bespreken we wat het eigenlijk inhoud om een pup te hebben en wat een pup allemaal nodig heeft. Jullie mogen dan ook al jullie vragen stellen. We hebben het onder andere over de volgende onderwerpen.
                        <ul>
                            <li>Elkaar begrijpen, communiceren</li>
                            <li>Regels voor de hond en regels voor het kind, respect voor elkaar!</li>
                            <li>Leuke spelletjes</li>
                        </ul>
                        Hierna maken we een afspraak voor de tweede les, deze zal zijn als jullie de pup een paar dagen in huis hebben. We gaan dan samen goed naar jullie puppy kijken en gaan de geleerde dingen uit les 1 in de praktijk brengen. Daarna kunnen we desgewenst nog een afspraak maken of kunnen jullie komen meedoen aan de puppycursus.
                        <br />
                        Meld je aan via het <SignupModalTrigger /> en stuur deze naar <EmailSignupLink />
                    </Styled.Paragraph>

                    <Styled.Seperator />

                    <Styled.Paragraph>
                        <strong>Hond en kind</strong><br />
                        Ervaar je problemen tussen kind(eren) en hond dan kun je je hier veel zorgen over maken. Het is belangrijk om met een probleem hoe klein ook hulp in te schakelen als je er zelf niet uit komt. De problemen lossen in veel gevallen namelijk niet vanzelf op of worden zelfs erger.
                        Ik ga jou en de rest van het gezin leren hoe je met aanpassingen, training en oefeningen meer veiligheid en rust kunt creëren voor jezelf, je kind(eren) en de hond.
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        <strong>Herken jij jezelf in deze situaties?</strong>
                        <ul>
                            <li>Mijn baby kruipt steeds naar de mand van de hond toe en de hond lijkt dit niet prettig te vinden.</li>
                            <li>Kinderen in de buurt willen steeds met mijn hond knuffelen, maar die wilt dit niet.</li>
                            <li>Mijn kleuter wilt steeds de riem van de hond vast houden, terwijl mijn hond dit niet fijn vindt.</li>
                            <li>Mijn pup rent achter mijn kleuter aan en hapt dan richting zijn voeten.</li>
                            <li>Mijn hond steelt eten uit de handen van de kinderen.</li>
                        </ul>
                    </Styled.Paragraph>
                    <Styled.Paragraph>
                        <strong>Wat houdt het in:</strong>
                        <ul>
                            <li>We gaan aan de slag in het leren begrijpen en lezen van de hond.</li>
                            <li>Jullie leren opbouwende spanning signaleren, zodat je op tijd actie kunt ondernemen.</li>
                            <li>Daarnaast ga ik jullie uitleggen hoe honden leren.</li>
                            <li>Hoe zorg je ervoor dat gedrag wat je niet wilt zien afneemt en gedrag wat je graag wilt toeneemt.</li>
                            <li>We leren hoe je een hond eigenlijk hoort te aaien en gaan dit ook oefenen.</li>
                            <li>Wat kun je doen wanneer de hond iets doet wat je helemaal niet leuk vindt?</li>
                            <li>Wat zijn leuke spelletjes die je kunt doen met je hond maar ook welke spelletjes je beter niet kunt doen.</li>
                            <li>Kortom, alles wat kinderen moeten weten om het contact met onze viervoeters leuk maar vooral veilig te houden.</li>
                            <li>Hoe kan ik mijn hond het beste corrigeren/ondersteunen.</li>
                        </ul>
                        Meld je aan via het <SignupModalTrigger /> en stuur deze naar <EmailSignupLink />
                    </Styled.Paragraph>
                </Styled.Section>

                <ScrollableBox>
                    <TermsAndConditions />
                </ScrollableBox>
            </Styled.Content>
        </Styled.Container>
    );
};
