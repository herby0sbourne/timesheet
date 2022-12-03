import { ChangeEventHandler } from "react";

type FormInputProps = {
    label: string;
    name: string;
    inputValue: string;
    displayDate: string[] | string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const FromInput = ({ label, name, onChangeHandler, inputValue, displayDate }: FormInputProps) => {
    const textColor = name === "clockIn" ? "text-green-500" : "text-[#e42664]";
    return (
        <div className="time-input flex items-center flex-col mb-8">
            <div className="form-group flex items-center justify-evenly gap-x-7">
                <label htmlFor="clockIn" className={"inline-block"}>
                    {label}
                </label>
                <input
                    className={"bg-transparent"}
                    type="datetime-local"
                    id={name}
                    name={name}
                    onChange={onChangeHandler}
                    value={inputValue}
                />
            </div>
            <div className="full-date">
                <span className={"text-gray-400"}>{displayDate[0]}</span>
                <span>{displayDate[1]}</span>
                <span className={textColor}>{displayDate[2]}</span>
            </div>
        </div>
    );
};

export default FromInput;
