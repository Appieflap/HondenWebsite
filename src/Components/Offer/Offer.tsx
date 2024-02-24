import { FC } from "react";
import * as Styled from "./Offer.styled.ts";
import ContentCutRoundedIcon from '@mui/icons-material/ContentCutRounded';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';

export const Offer: FC = () => {
    return (
        <Styled.Container>
            <Styled.ContentContainer>
                <Styled.Header>What we offer</Styled.Header>
                <Styled.ContainerBox>
                    <Styled.BoxItem>
                        <Styled.IconContainer>
                            <ContentCutRoundedIcon sx={{fontSize: 50}} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Grooming</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>Let your pets enjoy the first-class grooming services provided by our certified and experienced groomers.</Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>
                    <Styled.BoxItem>
                        <Styled.IconContainer>
                            <BedroomParentOutlinedIcon sx={{fontSize: 50}} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Pet hotel</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>At Tarian, we offer a safe & clean environment with playtime, exercises, healthy meals & more.</Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>
                    <Styled.BoxItem>
                        <Styled.IconContainer>
                            <ChildCareOutlinedIcon sx={{fontSize: 50}} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Dog daycare</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>Our daytime guests enjoy playtime with other dogs in a safe and fun environment.</Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>
                    <Styled.BoxItem>
                        <Styled.IconContainer>
                            <PrivacyTipOutlinedIcon sx={{fontSize: 50}} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Dog training</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>Our accredited pet trainers teach fun & eﬀective group & private classes through positive reinforcement.</Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>
                    <Styled.BoxItem>
                        <Styled.IconContainer>
                            <SupportAgentOutlinedIcon sx={{fontSize: 50}} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Veterinary care</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>Save your pet the discomfort of advanced illness & help save you the stress & expense of treatment.</Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>
                    <Styled.BoxItem>
                        <Styled.IconContainer>
                            <SupportOutlinedIcon sx={{fontSize: 50}} />
                        </Styled.IconContainer>
                        <Styled.BoxItemText>
                            <Styled.ItemTextHeader>Adoption</Styled.ItemTextHeader>
                            <Styled.ItemTextBody>Whether you adopt online or at a Tarian store near you, you’re helping change the life of a pet in need.</Styled.ItemTextBody>
                        </Styled.BoxItemText>
                    </Styled.BoxItem>
                </Styled.ContainerBox>
            </Styled.ContentContainer>
        </Styled.Container>
    )
}
