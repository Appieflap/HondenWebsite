import { FC } from "react";
import * as Styled from "./MainImage.styled.tsx";

export const MainImage: FC = () => {
    return (
        <Styled.Container>
            <Styled.ContentContainer>
                <Styled.TextContainer>
                    <div className="row justify-content-start">
                        <div className="col-xl-7 col-md-8 text-start">
                            <h1 style={{ fontSize: "70px"}}>Lorem</h1>
                            <h3 style={{ fontSize: "30px"}}>MAKE YOUR PETS HAPPY</h3>
                            <h4 style={{ fontSize: "22px"}}>Our Pet Shop values quality, comfort, and <br/> individuality of our products and services.</h4>
                            <Styled.ReadMoreContainer>
                                READ MORE
                            </Styled.ReadMoreContainer>
                        </div>
                    </div>
                </Styled.TextContainer>
            </Styled.ContentContainer>
        </Styled.Container>
    )
}
