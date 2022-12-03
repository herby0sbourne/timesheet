import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../provider/Store";
import { HiPlus } from "../constant/icons";
import JobCard from "./JobCard";

const Home = () => {
    const navigate = useNavigate();
    const { jobs } = useContext(StoreContext);

    return (
        <div className="main-dash flex h-screen flex-col justify-center items-center">
            <div className="top w-full px-4 py-1.5 text-center">List of Jobs</div>
            <div className="middle h-full w-full overflow-y-auto">
                <div className="jobs">
                    <ul>
                        {jobs.map((job) => {
                            return <JobCard key={job.id} job={job} />;
                        })}
                    </ul>
                </div>
            </div>
            <button
                className="bottom w-full bg-[#1d1c21] py-2 px-4 text-white cursor-pointer flex justify-center items-center"
                onClick={() => {
                    navigate("create");
                }}>
                <HiPlus className={"h-10 w-10"} />
            </button>
        </div>
    );
};

export default Home;
