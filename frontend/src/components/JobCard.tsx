import { Link } from "react-router-dom";
import { Job } from "../data/Jobs";

type JobProps = {
    job: Job;
};

const JobCard = ({ job }: JobProps) => {
    const { title, userId } = job;
    return (
        <li>
            <Link
                to={`/${userId}`}
                className="job bg-[#f9f7f6] block px-4 pt-4 pb-2 border-b-2 border-[#f5deb3]">
                <p>{title}</p>
            </Link>
        </li>
    );
};

export default JobCard;
