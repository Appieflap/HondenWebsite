import styled from "@emotion/styled";

export const Container = styled("div")({
    width: "100%",
    borderTop: "1px solid #775029",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    bottom: 0,
    boxSizing: "border-box", // ✅ fix voor overflow
});