import React, { useContext } from "react";
import { Context } from "../../../context";
import "./Select.scss";

const Select = ({isVisible}) => {

    const {state, dispatch} = useContext(Context);

    return (
        <div className={isVisible ? "select" : "select hidden"}>
            {
                state.selectItems.map(item => {
                    return <div 
                                className={item.active ? "select__select-item active" : "select__select-item"}
                                onClick={() => dispatch({type: "filterTodos", payload: item.id})}
                                key={item.id}
                            >
                                {item.value}
                            </div>
                })
            }
        </div>
    );
};

export default Select;