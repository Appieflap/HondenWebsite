import { FC } from "react";
import * as Styled from "./Footer.styled.ts";

export const Footer: FC = () => {
    return (
        <Styled.Container>
            <p>
                &copy; {new Date().getFullYear()} Vrolijk Staartje. Alle rechten voorbehouden.{" "}
            </p>
        </Styled.Container>
    );
};
