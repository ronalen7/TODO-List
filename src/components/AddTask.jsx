import React from "react";

function AddTask(props) {
    return (
        <div className="item" id="button1">
            <button className="item-btn" id="add" onClick={props.onClickEvent}>
                <img src="images/plus-152614_960_720.png" alt="" />
                Add Task &nbsp;&nbsp;&nbsp;<b>+</b></button>
        </div>
    );
}

export default AddTask;