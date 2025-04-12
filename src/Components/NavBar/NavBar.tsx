import { FC, useState } from "react";
import * as Styled from './NavBar.styled.ts';
import { UseWindowSize } from "../../Hooks/UseWindowSize.tsx";
import mainLogo from './logo.png';
import TableRowsIcon from '@mui/icons-material/TableRows';

export const NavBar: FC = () => {
    const windowSize = UseWindowSize();
    const [activeDrawer, setActiveDrawer] = useState(false);

    return (
        <>
            <Styled.Container>
                <Styled.ContentContainer>
                    { windowSize.width > 768 ?
                        <Styled.ListContainer>
                            <Styled.ListItem to="/">Startpagina</Styled.ListItem>
                            <Styled.ListItem to="/grooming">Trimsalon</Styled.ListItem>
                            <Styled.ListItem to="/dogtraining">Honden Training</Styled.ListItem>
                            <Styled.ListItem to="/contact">Contact</Styled.ListItem>
                        </Styled.ListContainer>
                    :
                        <Styled.CroppedNavContainer>
                            <TableRowsIcon
                                style={{ cursor: "pointer", marginRight: "10px", fontSize: 30 }}
                                onClick={() => setActiveDrawer(!activeDrawer)}
                            />
                            <img src={mainLogo} alt="vrolijkStaartje"/>
                        </Styled.CroppedNavContainer>
                    }
                </Styled.ContentContainer>
            </Styled.Container>
            { windowSize.width <= 768 ?
            <Styled.DrawerContainer active={activeDrawer}>
                <Styled.DrawerButton onClick={() => setActiveDrawer(false)} to="/">Home</Styled.DrawerButton>
                <Styled.DrawerButton onClick={() => setActiveDrawer(false)} to="/grooming">Trimsalon</Styled.DrawerButton>
                <Styled.DrawerButton onClick={() => setActiveDrawer(false)} to="/dogtraining">Honden Training</Styled.DrawerButton>
                <Styled.DrawerButton onClick={() => setActiveDrawer(false)} to="/contact">Contact</Styled.DrawerButton>
            </Styled.DrawerContainer> : null }
        </>
    )
}
