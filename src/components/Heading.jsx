import React from "react";

function Heading() {
    return (
        <div className="item" id="heading" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#cb7171",
            boxShadow: "0px 3px #b14343",
            fontFamily: `'Alegreya', serif`
        }}>
            <h1 style={{
                margin: "2px",
                color: "whitesmoke"
            }}>TODO List</h1>
        </div>
    );
}

export default Heading;