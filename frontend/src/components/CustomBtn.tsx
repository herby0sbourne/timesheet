import React from "react";
import { ButtonHTMLAttributes } from "react";

type CustomBtnProps = {
    type: string;
    title: string;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomBtn = ({ title, closeModal, ...props }: CustomBtnProps) => {
    return (
        <button
            {...props}
            className={"btn bg-blue-500 rounded-lg py-2.5 px-5"}
            onClick={() => closeModal(false)}>
            {title}
        </button>
    );
};

export default CustomBtn;
