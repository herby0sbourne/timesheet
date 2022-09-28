import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const CreateDuty = () => {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    useEffect(() => {
        const today = new Date().toDateString();
        const today2 = new Date().toString();
        const today3 = new Date().toLocaleString();
        const today4 = new Date().toISOString().substring(0, 16);
        console.log({ today, today2, today3, today4 });

        setCheckIn(today4);
        // setCheckIn("2022-09-16T15:05");
    }, []);

    const dateConverter = () => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        const today = new Date();

        // @ts-ignore
        console.log(today.toLocaleDateString("en-US", options)); // 9/17/2016
    };

    // dateConverter();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "clockIn") {
            setCheckIn(value);
        } else {
            setCheckOut(value);
        }
    };

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ checkIn, checkOut });
        // console.log(e.target.elements.option.value);
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label htmlFor="clockIn">Clock in</label>
                <input
                    type="datetime-local"
                    id="clockIn"
                    name="clockIn"
                    onChange={onChangeHandler}
                    value={checkIn}
                />
            </div>
            <div className="form-group">
                <label htmlFor="clockOut">Clock out</label>
                <input
                    type="datetime-local"
                    id="clockOut"
                    name="clockOut"
                    onChange={onChangeHandler}
                    value={checkOut}
                />
            </div>

            <button type="submit">click me</button>
        </form>
    );
};

export default CreateDuty;
