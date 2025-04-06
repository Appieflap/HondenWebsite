import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

interface ScrollableBoxProps {
    title?: string;
    children: ReactNode;
}

export const ScrollableBox: FC<ScrollableBoxProps> = ({ children }) => {
    return (
        <Container>
            <BoxContent>
                <Title>Algemene voorwaarden</Title>
                <ContentInner>{children}</ContentInner>
            </BoxContent>
        </Container>
    );
};

const Container = styled.div({
    marginTop: "40px",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    boxSizing: "border-box",
});

const BoxContent = styled.div({
    maxHeight: "350px",
    overflowY: "auto",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#444",
    padding: "12px",
    boxSizing: "border-box",

    // Prevent scrollbar from overlaying content
    scrollbarGutter: "stable", // supported in modern browsers
    a: {
        color: "#5c67f2",
        textDecoration: "none",
    },
});

const Title = styled.h4({
    margin: "0 0 8px 0",
    fontSize: "24px",
    fontWeight: 600,
    textAlign: "center",
});

const ContentInner = styled.div({
    paddingRight: "4px", // account for scrollbar
});
