import { FC } from "react";

export const EmailSignupLink: FC = () => {
    const subject = encodeURIComponent("Aanmeldformulier hondentraining");

    const body = encodeURIComponent(`
- Naam:
- Adres:
- Postcode + huisnummer:
- Telefoonnummer:
- Naam hond:
- Ras hond:
- Leeftijd hond:
- Gevaccineerd (ja/nee):
- Beschikbaar vanaf wanneer:

Locatie/dagen les (groepslessen)
- Locatie (Munstergeleen / Maria-Hoop):
- Dagen les (Woensdag middag [vanaf 14.00uur] / Zaterdag):

Soort les
- Puppy cursus (ja/nee):
- Basis cursus (ja/nee):
- Puber cursus (ja/nee):
- Packed puppy/basis/puber cursus (ja/nee):
- Individueel [losse les] (ja/nee):
- Individueel [8 lessen] (ja/nee):
- Hond kind [losse les] (ja/nee):
- Hond kind [8 lessen] (ja/nee):
- Hond kind [3 maanden] (ja/nee):
- Hond kind [6 maanden] (ja/nee):

Ik verklaar dat ik de algemene voorwaarden heb gelezen en ga akkoord met de inhoud ervan.`);

    const mailto = `mailto:hondentraining-trimsalon@vrolijkstaartje.nl?subject=${subject}&body=${body}`;

    return (
        <a href={mailto} style={{ textDecoration: "none", color: "#5c67f2", fontWeight: 500 }}>
            hondentraining-trimsalon@vrolijkstaartje.nl
        </a>
    );
};
