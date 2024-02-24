import styled from "@emotion/styled";

export const Container = styled("div")({
    paddingLeft: "15px",
    paddingRight: "15px",
    display: "flex",
    justifyContent: "center",
    // add border to bottom
    borderBottom: "1px solid #959bf2",
});

export const ContentContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    maxWidth: "1170px",
    width: "100%",
    height: "120px",
});

export const LocationContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    width: "200px",
    height: "40px",
});

export const TextContainer = styled("div")({
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    fontWeight: 100,
});

export const MailContainer = styled("div")({
    fontFamily: "sans-serif",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "130px",
    height: "20px",
    borderStyle: "solid",
    borderColor: "#959bf2",
    borderWidth: "3px",
    borderRadius: "7px",
    padding: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    '&:hover': {
        backgroundColor: "#959bf2",
        color: "white",
    },
});
