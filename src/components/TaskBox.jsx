import React from "react";

function TaskBox(props) {
    return (
        <div className="box" id={props.ind} key={props.ind}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button id="box-del-btn" style={{
                    border: "2px solid #c00000",
                    borderRadius: "50%",
                    backgroundColor: "#ff0000",
                    margin: "1px 3px",
                    color: "white",
                    cursor: "pointer"
                }}
                    onClick={() => { props.onClick(props.ind); }}><b>x</b></button>
                <h5 style={{ margin: "0px 8px" }}>{props.title[0]}</h5>
            </div>
            <div id="badge-cont">
                <h5 className="badge" id="badge-cat" style={{
                    backgroundColor: "#0028ad"
                }}>{props.title[1]}</h5>
                <h5 className="badge" id="badge-date" style={{
                    backgroundColor: "#209bd6"
                }}>{props.title[2]}</h5>
            </div>
        </div>
    );
}

export default TaskBox;