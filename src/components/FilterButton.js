import React from "react";
import Button from '@material-ui/core/Button';

function FilterButton(props) {
    return (
    <Button variant="contained" color="primary"
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
    >
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
    </Button>
    );
}

export default FilterButton;