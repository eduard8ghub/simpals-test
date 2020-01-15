import React from "react";
import "./renderField.css";
import classes from "classnames"

export const RenderInput = ({input, meta,  ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes("form-group", {"has-error": hasError})}>
            <input {...input} {...props} className="form-control"/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};