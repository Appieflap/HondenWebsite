import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";

export const SignupModalTrigger: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const formText = `Aanmeldformulier

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
Puppy cursus (ja/nee):
Basis cursus (ja/nee):
Puber cursus (ja/nee):
Packed puppy/basis/puber cursus (ja/nee):
Individueel (losse les) (ja/nee):
Individueel (8 lessen) (ja/nee):
Hond kind (losse les) (ja/nee):
Hond kind (8 lessen) (ja/nee):
Hond kind (3 maanden) (ja/nee):
Hond kind (6 maanden) (ja/nee):

Ik verklaar dat ik de algemene voorwaarden heb gelezen en ga akkoord met de inhoud ervan.`;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(formText);
        alert("Formuliertekst gekopieerd naar klembord!");
    };

    return (
        <>
            <OpenText onClick={() => setIsOpen(true)}>aanmeldformulier</OpenText>

            {isOpen && (
                <Overlay onClick={() => setIsOpen(false)}>
                    <Modal onClick={e => e.stopPropagation()}>
                        <Title>Aanmeldformulier</Title>
                        <Textarea readOnly value={formText} />
                        <Actions>
                            <CopyButton onClick={handleCopy}>Kopieer formulier</CopyButton>
                            <CloseButton onClick={() => setIsOpen(false)}>Sluiten</CloseButton>
                        </Actions>
                    </Modal>
                </Overlay>
            )}
        </>
    );
};

// Styling
const OpenText = styled.span({
    color: "#5c67f2",
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "underline",
    display: "inline-block",
});

const Overlay = styled.div({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
});

const Modal = styled.div({
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    width: "90%",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
});

const Title = styled.h2({
    fontSize: "20px",
    margin: 0,
    color: '#775029'
});

const Textarea = styled.textarea({
    width: "100%",
    height: "300px",
    resize: "none",
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "10px",
    fontSize: "14px",
    lineHeight: 1.5,
    fontFamily: "inherit",
    boxSizing: "border-box",

    "&:focus": {
        outline: "none",
        borderColor: "#775029",
    },
});

const Actions = styled.div({
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
});

const CopyButton = styled.button({
    padding: "8px 14px",
    backgroundColor: "#775029",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: 500,
    cursor: "pointer",
});

const CloseButton = styled.button({
    padding: "8px 14px",
    backgroundColor: "#FFE5C4",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontWeight: 500,
    cursor: "pointer",
});
