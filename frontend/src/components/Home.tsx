import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IJob, StoreContext } from "../provider/Store";
import { HiPlus } from "../constant/icons";
import JobCard from "./JobCard";

const Home = () => {
    const navigate = useNavigate();
    // const { jobs } = useContext(StoreContext);

    const [jobs, setJobs] = useState<IJob[] | []>([]);

    useEffect(() => {
        const graphqlQuery = {
            query: `
            query Users {
              jobs {
                id
                title
                userId
              }
            }
            `
        };

        const fetchgql = async () => {
            const res = await fetch("http://localhost:4000/graphql", {
                method: "POST",
                headers: {
                    // Authorization: `Bearer ${this.props.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(graphqlQuery)
            });
            const { data } = await res.json();
            setJobs(data.jobs);
            console.log(data.jobs);
        };

        fetchgql();
    }, []);
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
