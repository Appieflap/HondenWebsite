import styled from "@emotion/styled";

export const Container = styled("div")({
    paddingLeft: "15px",
    paddingRight: "15px",
    display: "flex",
    justifyContent: "center",
});

export const ContentContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0",
    maxWidth: "1170px",
    width: "100%",
});

export const Header = styled("header")({
    fontSize: "42px",
    fontWeight: "700",
    paddingBottom: "30px",
    textAlign: "center",
});

export const Section = styled("section")({
    width: "100%",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#444",
});

export const Paragraph = styled("p")({
    margin: 0,
});
