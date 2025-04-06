import styled from "@emotion/styled";
import { NavLink } from "react-router";

export const Container = styled("div")({
    paddingLeft: "15px",
    paddingRight: "15px",
    display: "flex",
    justifyContent: "center",
    position: "sticky",
    top: "0px",
    backgroundColor: "white",
    // add shadow only when sticky is active
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)",
});

export const ContentContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1170px",
    width: "100%",
    height: "60px",
});

export const ListContainer = styled("ul")({
    display: "flex",
    listStyleType: "none",
    padding: 0,
    margin: 0,
    fontWeight: 600,
});

export const CroppedNavContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: "#775029",
});

export const DrawerContainer = styled("div",
    { shouldForwardProp: (prop: string) => !["active"].includes(prop) },
)(({ active }: { active: boolean }) => ({
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 60,
    left: active ? 0 : -300,
    width: "300px",
    height: "100%",
    backgroundColor: "white",
    borderRight: "1px solid #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    paddingTop: "20px",
    transition: "left 0.3s ease",
}));

export const DrawerButton = styled(NavLink)({
    padding: "10px 20px",
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    transition: "background-color 0.3s ease",
    fontSize: "16px",
    marginBottom: "5px",
    '&:hover': {
        backgroundColor: "#775029",
        color: "white",
    },
    // remove any a href styling
    color: "inherit",
    textDecoration: "none",
});

export const ListItem = styled(NavLink)({
    position: "relative",
    marginRight: "50px",
    cursor: "pointer",
    '&:hover::after': {
        width: "100%", // Underline reaches full width on hover
    },
    '&::after': {
        content: '""',
        position: "absolute",
        bottom: -3,
        left: 0,
        width: 0,
        height: "2px",
        backgroundColor: "#775029",
        transition: "width 0.3s ease",
    },

    // remove any a href styling
    color: "inherit",
    textDecoration: "none",
});
