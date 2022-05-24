import React from "react";

function Date(props) {
    return (
        <div className="item" id="date-cont">
            <h5>DATE</h5>
            <input type="date" name="date" id="date" value={props.val} onChange={props.onChangeEvent} />
        </div>
    );
}

export default Date;