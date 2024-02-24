import {FC, useState} from "react";
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
                            <Styled.ListItem>Home</Styled.ListItem>
                            <Styled.ListItem>Dog Training</Styled.ListItem>
                            <Styled.ListItem>Grooming</Styled.ListItem>
                            <Styled.ListItem>About Me</Styled.ListItem>
                        </Styled.ListContainer>
                    :
                        <Styled.CroppedNavContainer>
                            <TableRowsIcon
                                style={{cursor: "pointer", marginRight: "10px", fontSize: 30}}
                                onClick={() => setActiveDrawer(!activeDrawer)}
                            />
                            <img src={mainLogo} alt="vrolijkStaartje"/>
                        </Styled.CroppedNavContainer>
                    }
                </Styled.ContentContainer>
            </Styled.Container>
            { windowSize.width <= 768 ?
            <Styled.DrawerContainer active={activeDrawer}>
                <Styled.DrawerButton>Home</Styled.DrawerButton>
                <Styled.DrawerButton>Dog Training</Styled.DrawerButton>
                <Styled.DrawerButton>Grooming</Styled.DrawerButton>
                <Styled.DrawerButton>About Me</Styled.DrawerButton>
            </Styled.DrawerContainer> : null }
        </>
    )
}
