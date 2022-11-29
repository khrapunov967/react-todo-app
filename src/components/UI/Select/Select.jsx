import React from "react";
import { useSelector } from "react-redux";
import "./Select.scss";

const Select = () => {

    const {isSelectVisible, selectItems} = useSelector(state => state.selectSlice);

    return (
        <div className={isSelectVisible ? "select" : "select hidden"}>
            {
                selectItems.map(item => {
                    return <div 
                                className={item.active ? "select__select-item active" : "select__select-item"}
                                onClick={() => {}}
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