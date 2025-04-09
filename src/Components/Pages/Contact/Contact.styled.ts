import styled from "@emotion/styled";

export const Container = styled.div({
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
});

export const ContentContainer = styled("div")({
    maxWidth: "1170px",
    width: "100%",
    padding: "50px 0",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
});

export const Header = styled.h1({
    fontSize: "42px",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "20px",
});

export const ContainerBox = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
});

export const InfoLine = styled("div")({
    fontSize: "18px",
    color: "#333",
    lineHeight: "1.6",
    textAlign: "center",

    a: {
        color: "#0077cc",
        textDecoration: "none",
        '&:hover': {
            textDecoration: "underline",
        },
    },
});
