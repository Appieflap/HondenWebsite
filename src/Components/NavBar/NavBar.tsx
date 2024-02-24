import { FC } from "react";
import * as Styled from './NavBar.styled.ts';

export const NavBar: FC = () => {
    return (
        <Styled.Container>
            <Styled.ContentContainer>
                <Styled.ListContainer>
                    <Styled.ListItem>Home</Styled.ListItem>
                    <Styled.ListItem>Dog Training</Styled.ListItem>
                    <Styled.ListItem>Grooming</Styled.ListItem>
                    <Styled.ListItem>About Me</Styled.ListItem>
                </Styled.ListContainer>
            </Styled.ContentContainer>
        </Styled.Container>
    )
}
