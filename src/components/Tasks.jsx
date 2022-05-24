import React from "react";
import TaskBox from "./TaskBox";

function Tasks(props) {

    return (
        <div className="item" id="list">
            <h5>TASKS</h5>
            <div id="box-list">
                <p style={{
                    fontFamily: `Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif`,
                    margin: "2px 5px"
                }}>{props.paraText}</p>
                {props.stateArray.map(function (todoListItem, index) {
                    return <TaskBox title={todoListItem} ind={index} onClick={props.onClickEvent} />;
                })}
            </div>
        </div>
    );
}

export default Tasks;