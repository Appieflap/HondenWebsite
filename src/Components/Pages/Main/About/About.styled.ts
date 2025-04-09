import styled from "@emotion/styled";

export const Container = styled("div")({
    paddingTop: "120px",
    paddingLeft: "15px",
    paddingRight: "15px",
    display: "flex",
    justifyContent: "center",
});

export const Seperator = styled.hr({
    border: "none",
    borderTop: "2px solid #e0e0e0",
    margin: "10px 0",
    width: "100%",
});

export const ContentContainer = styled("div")({
    maxWidth: "1100px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "40px",

    "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center",
    },
});

export const Image = styled("img")({
    width: "300px",
    height: "auto",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",

    "@media (max-width: 768px)": {
        width: "100%",
        maxWidth: "400px",
    },
});

export const TextSection = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column",
});

export const Header = styled("h2")({
    fontSize: "40px",
    fontWeight: 700,
    marginBottom: "30px",
});

export const Paragraph = styled("p")({
    fontSize: "16px",
    lineHeight: 1.8,
    color: "#333",
    marginBottom: "20px",
});
