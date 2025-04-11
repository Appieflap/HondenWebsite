import { FC } from "react";
import * as Styled from './Header.styled.ts';
import mainLogo from './logo.jpg';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

export const Header: FC = () => {
    return (
        <Styled.Container>
            <Styled.ContentContainer>
                <a
                    href="https://www.google.com/maps/place/Hofstraat+27A,+6161+AP+Geleen"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <Styled.LocationContainer>
                        <div className="unit-left">
                            <PlaceOutlinedIcon sx={{ fontSize: 50, color: "#775029" }} />
                        </div>
                        <Styled.TextContainer>
                            <div>Hofstraat 27A</div>
                            <div>Geleen, 6161 AP</div>
                        </Styled.TextContainer>
                    </Styled.LocationContainer>
                </a>

                <img src={mainLogo} alt="vrolijkStaartje"/>

                <a
                    href="mailto:hondentraining-trimsalon@vrolijkstaartje.nl"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <Styled.MailContainer>
                        <MailOutlinedIcon style={{ marginRight: "5px" }} />
                        <span>Neem contact op</span>
                    </Styled.MailContainer>
                </a>
            </Styled.ContentContainer>
        </Styled.Container>
    );
};
