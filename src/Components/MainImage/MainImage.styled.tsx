import styled from "@emotion/styled";

export const Container = styled("div")({
    paddingLeft: "15px",
    paddingRight: "15px",
    display: "flex",
    justifyContent: "center",
    backgroundImage: "url('home-bg-1.jpg')",
    backgroundPosition: "right", // Centers the background image
    backgroundRepeat: "no-repeat", // Prevents the background image from repeating
    backgroundSize: "cover", // Scales the background image to be as large as possible
    height: "600px",
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
    backgroundColor: "#959bf2",
    '&:hover': {
        backgroundColor: "#000000",
        color: "white",
    },
});
