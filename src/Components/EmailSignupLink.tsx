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
  Puppy cursus
  Basis cursus
  Basis cursus
  Puber cursus
  Packed puppy/basis/puber cursus
  Individueel (losse les)
  Individueel (8 lessen)
  Hond kind (losse les)
  Hond kind (8 lessen)
  Hond kind (3 maanden)
  Hond kind (6 maanden)

- Les:

Ik verklaar dat ik de algemene voorwaarden heb gelezen en ga akkoord met de inhoud ervan.`);

    const mailto = `mailto:vrolijkstaartje@hotmail.com?subject=${subject}&body=${body}`;

    return (
        <a href={mailto} style={{ textDecoration: "none", color: "#5c67f2", fontWeight: 500 }}>
            vrolijkstaartje@hotmail.com
        </a>
    );
};
