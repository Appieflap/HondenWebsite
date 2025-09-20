import styled from "@emotion/styled";

export const Container = styled.div({
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
});

export const Content = styled.div({
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

export const SubHeader = styled.h2({
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "10px",
});

export const Section = styled.section({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
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
    a: {
        color: "#5c67f2",
        textDecoration: "none",
    },
});

export const Seperator = styled.hr({
    border: "none",
    borderTop: "2px solid #775029",
    margin: "10px 0",
    width: "100%",
});


export const Table = styled.table({
    width: "100%",
    borderCollapse: "collapse",
    th: {
        textAlign: "left",
        borderBottom: "2px solid #775029",
        padding: "8px",
    },

    td: {
        padding: "8px",
        borderBottom: "1px solid #FFE5C4",
    },


    'tbody tr:nth-child(odd)': {
        backgroundColor: "#fff7f0", // light gray
    },

    'tbody tr:nth-child(even)': {
        backgroundColor: "white", // slightly darker gray
    },

    '@media (max-width: 600px)': {
        fontSize: "14px",
        td: { padding: "6px" },
        th: { padding: "6px" },
    },
});

export const AgendaTable = styled.table({
    width: "50%",
    borderCollapse: "collapse",
    th: {
        textAlign: "left",
        borderBottom: "2px solid #775029",
        padding: "8px",
    },

    td: {
        padding: "8px",
        borderBottom: "1px solid #FFE5C4",
    },


    'tbody tr:nth-child(odd)': {
        backgroundColor: "#fff7f0", // light gray
    },

    'tbody tr:nth-child(even)': {
        backgroundColor: "white", // slightly darker gray
    },

    '@media (max-width: 600px)': {
        fontSize: "14px",
        td: { padding: "6px" },
        th: { padding: "6px" },
    },
});
