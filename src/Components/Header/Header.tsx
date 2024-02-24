import { FC } from "react";
import * as Styled from './Header.styled.ts';
import mainLogo from './logo.png';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

export const Header: FC = () => {
    return (
        <Styled.Container>
            <Styled.ContentContainer>
                <Styled.LocationContainer>
                    <div className="unit-left">
                        <PlaceOutlinedIcon sx={{ fontSize: 50, color: "#959bf2" }} />
                    </div>
                    <Styled.TextContainer>
                        <div>SjefitoStraat 24</div>
                        <div>Sittard, 6121 ZA</div>
                    </Styled.TextContainer>
                </Styled.LocationContainer>
                <img  src={mainLogo} alt="vrolijkStaartje"/>
                <Styled.MailContainer>
                    <MailOutlinedIcon style={{ marginRight: "5px"}} />
                    Get in touch
                </Styled.MailContainer>
            </Styled.ContentContainer>
        </Styled.Container>
    )
}
