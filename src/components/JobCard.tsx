import { Job } from "../data/Jobs";

type JobProps = {
    job: Job;
};

const JobCard = ({ job }: JobProps) => {
    const { title } = job;
    return (
        <li>
            <div className="job bg-[#f9f7f6] px-4 pt-4 pb-2 border-b-2 border-[#f5deb3]">
                <p>{title}</p>
            </div>
        </li>
    );
};

export default JobCard;
