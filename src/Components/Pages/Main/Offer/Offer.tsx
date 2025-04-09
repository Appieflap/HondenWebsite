import { FC } from "react";
import * as Styled from "./Offer.styled.ts";
import ContentCutRoundedIcon from '@mui/icons-material/ContentCutRounded';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

export const Offer: FC = () => {
    return (
        <Styled.Container>
            <Styled.ContentContainer>
                <Styled.Header>Wat wij aanbieden</Styled.Header>
                <Styled.ContainerBox>
                    <Styled.BoxItem>
                        <Styled.IconContainer to="/grooming">
                            <ContentCutRoundedIcon sx={{ fontSize: 50 }} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Trimsalon</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>
                                Professionele vachtverzorging voor jouw hond, inclusief knippen, plukken, wassen, ontwollen en puppy gewenning.
                            </Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>

                    <Styled.BoxItem>
                        <Styled.IconContainer to="/dogtraining">
                            <SchoolOutlinedIcon sx={{ fontSize: 50 }} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Hondentraining</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>
                                Praktische cursussen zoals puppytraining, basis en pubercursus, individueel of in groepsverband — altijd op maat en positief.
                            </Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>

                    <Styled.BoxItem>
                        <Styled.IconContainer to="/dogtraining">
                            <FamilyRestroomOutlinedIcon sx={{ fontSize: 50 }} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Hond & Kind begeleiding</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>
                                Begeleiding voor gezinnen met kinderen en honden. Veilig en positief samenleven, vanaf de eerste ontmoeting tot de dagelijkse routine.
                            </Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>

                    <Styled.BoxItem>
                        <Styled.IconContainer to="/grooming">
                            <ChildCareOutlinedIcon sx={{ fontSize: 50 }} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Angstige honden training</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>
                                Gespecialiseerde training voor honden die angstig zijn bij borstelen, wassen, nagels knippen of andere trimsalon-ervaringen.
                            </Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>

                    <Styled.BoxItem>
                        <Styled.IconContainer to="/grooming">
                            <Diversity3OutlinedIcon sx={{ fontSize: 50 }} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Workshops</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>
                                Leer zelf je hond knippen, verzorgen of klitvrij houden in kleine groepen of individueel. Praktisch, leerzaam en gezellig.
                            </Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>

                    <Styled.BoxItem>
                        <Styled.IconContainer to="/dogtraining">
                            <EmojiObjectsOutlinedIcon sx={{ fontSize: 50 }} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Begeleiding</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>
                                Elke hond en situatie is anders. Wij denken mee en passen de training of verzorging aan op jouw wensen en de behoeften van je hond.
                            </Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>
                </Styled.ContainerBox>
            </Styled.ContentContainer>
        </Styled.Container>
    );
};
