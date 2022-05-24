import React from "react";

function Description(props) {

    return (
        <div className="item" id="description">
            <h5>DESCRIPTION</h5>
            <textarea name="desp" id="desp" cols="106" rows="1" placeholder="What do you need to do?" value={props.val} onChange={props.onChangeEvent}></textarea>
        </div>
    );
}

export default Description;