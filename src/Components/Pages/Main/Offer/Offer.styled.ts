import styled from "@emotion/styled";
import { NavLink } from "react-router";

export const Container = styled("div")({
    paddingLeft: "15px",
    paddingRight: "15px",
    display: "flex",
    justifyContent: "center",
});

export const ContentContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0",
    maxWidth: "1170px",
    width: "100%",
});

export const Header = styled("header")({
    fontSize: "55px",
    fontWeight: "700",
    paddingBottom: "70px",
    paddingTop: "70px",
});

export const ContainerBox = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
});

export const BoxItem = styled("div")({
    display: "flex",
    margin: "50px 0 30px",
});

export const BoxItemText = styled("div")({
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    maxWidth: "250px",
});

export const ItemTextHeader = styled("span")({
    fontSize: "20px",
    fontWeight: "700",
    paddingBottom: "10px",
});

export const ItemTextBody = styled("span")({
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#777777",
});

export const IconContainer = styled(NavLink)({
    minWidth: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "linear-gradient(145deg, #ffe9cd 33%, #f4eae1 100%)",
    border: "3px solid #775029",
    display: "flex",
    color: "#775029",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    boxShadow: "inset 0 0 5px rgba(255, 255, 255, 0.5), 0 2px 8px rgba(0,0,0,0.1)",
});
