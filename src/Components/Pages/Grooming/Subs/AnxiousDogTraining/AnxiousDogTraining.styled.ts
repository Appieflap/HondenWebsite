import styled from "@emotion/styled";

export const Container = styled.div({
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
});

export const Header = styled.h2({
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
});

export const Contact = styled.p({
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: 1.6,
    color: "#222",
    a: {
        color: "#5c67f2",
        textDecoration: "none",
    },
    marginTop: "10px",
});