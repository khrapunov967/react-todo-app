import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectItem } from "../../../store/selectSlice";
import "./Select.scss";

const Select = () => {

    const {isSelectVisible, selectItems} = useSelector(state => state.selectSlice);
    const dispatch = useDispatch();

    return (
        <div className={isSelectVisible ? "select" : "select hidden"}>
            {
                selectItems.map(item => {
                    return <div 
                                className={item.active ? "select__select-item active" : "select__select-item"}
                                onClick={() => dispatch(changeSelectItem({value: item.value}))}
                                key={item.id}
                            >
                                {item.title}
                            </div>
                })
            }
        </div>
    );
};

export default Select;