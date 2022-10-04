import React from "react";

interface CustomBtnProps {
    title: string;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomBtn = ({ title, closeModal }: CustomBtnProps) => {
    return (
        <button
            className={"btn bg-blue-500 rounded-lg py-2.5 px-5"}
            onClick={() => closeModal(false)}>
            {title}
        </button>
    );
};

export default CustomBtn;
