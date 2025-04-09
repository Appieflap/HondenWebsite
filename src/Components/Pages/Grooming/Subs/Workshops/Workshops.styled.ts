import styled from "@emotion/styled";

export const Container = styled.div({
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
});

export const Content = styled.div({
    maxWidth: "800px",
    width: "100%",
    padding: "50px 0",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
});

export const Header = styled.h1({
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "10px",
});

export const Paragraph = styled.div({
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#444",
    ul: {
        marginTop: "10px",
        paddingLeft: "20px",
    },
    li: {
        marginBottom: "6px",
        '&::marker': {
            color: "#775029",
        }
    },
    a: {
        color: "#5c67f2",
        textDecoration: "none",
    },
});