import styled from "@emotion/styled";

export const Container = styled("div")({
    paddingLeft: "15px",
    paddingRight: "15px",
    display: "flex",
    justifyContent: "center",
    backgroundImage: "url('home-bg-1.jpg')",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    height: "600px",
    backgroundColor: "#f0f0f0",
});

export const ContentContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    maxWidth: "1170px",
    width: "100%",
});

export const TextContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    maxWidth: "960px",
});

export const ReadMoreContainer = styled("div")({
    fontFamily: "sans-serif",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "180px",
    height: "35px",
    borderRadius: "7px",
    color: "white",
    padding: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    border: "3px solid #775029",
    backgroundColor: "#775029",
    // sizing
    '&:hover': {
        backgroundColor: "#FFE5C4",
        color: "#775029",
        border: "3px solid #775029",
    },
});
