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
                    href="https://www.google.com/maps/place/Vrolijk+Staartje+hondentrainer+%26+trimsalon/@50.963084,5.8180545,16.99z/data=!4m15!1m8!3m7!1s0x47c0c73af39dbbf9:0xa37f4a21fc316f8b!2sHofstraat+27A,+6161+AP+Geleen!3b1!8m2!3d50.9630812!4d5.8180574!16s%2Fg%2F11c5j3vtnp!3m5!1s0x47c0c746d02391d3:0x3e9830cfcf6c37b9!8m2!3d50.9630812!4d5.8180574!16s%2Fg%2F11x8xj159_"
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
