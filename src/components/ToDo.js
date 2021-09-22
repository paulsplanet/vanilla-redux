import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators, remove } from "../store";

function ToDo ({ text, onBtnClick, id }) {

    return (
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={onBtnClick}>Del</button>
        </li>
    )
};

/* Ver #1 & #2
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}
*/

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(remove(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);