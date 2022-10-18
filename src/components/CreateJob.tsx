import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../provider/Store";
import InputGroup from "./InputGroup";

const CreateJob = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { createNewJob } = useContext(StoreContext);

    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            job: { value: string };
        };
        const job = target.job.value;
        if (job === "") return setError("invalid Job Title");
        createNewJob(job);
        navigate("/");
    };

    return (
        <form className="px-4 text-center" onSubmit={onSubmitHandler}>
            {error && <p>{error}</p>}
            <InputGroup type="text" name="job" placeholder="Job Title" />
            <button className="p-2 bg-pink-300 rounded-lg mt-4 mx-auto" type="submit">
                Submit
            </button>
        </form>
    );
};

export default CreateJob;
