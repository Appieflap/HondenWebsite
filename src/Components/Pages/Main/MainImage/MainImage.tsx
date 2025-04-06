import { FC } from "react";
import * as Styled from "./MainImage.styled.tsx";

export const MainImage: FC = () => {
    return (
        <Styled.Container>
            <Styled.ContentContainer>
                <Styled.TextContainer>
                    <div className="row justify-content-start">
                        <div className="col-xl-7 col-md-8 text-start">
                            <h1 style={{ fontSize: "70px" }}>MAAK JE HOND GELUKKIG</h1>
                            <h4 style={{ fontSize: "22px" }}>
                                Onze trimsalon en hondentraining staan voor kwaliteit,<br />
                                comfort en een persoonlijke aanpak voor jou en je hond.
                            </h4>
                        </div>
                    </div>
                </Styled.TextContainer>
            </Styled.ContentContainer>
        </Styled.Container>
    )
}
