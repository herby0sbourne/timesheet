interface DisplayDateProps {
    displayDate: string[] | string;
    timeColor?: boolean;
}

const DisplayDate = ({ displayDate, timeColor }: DisplayDateProps) => {
    return (
        <div className="full-date text-xl mt-2 mb-16">
            <span className={"text-gray-400"}>{displayDate[0]}</span>
            <span>{displayDate[1]}</span>
            <span className={`${timeColor ? "text-green-500" : "text-[#e42664]"}`}>
                {displayDate[2]}
            </span>
        </div>
    );
};

export default DisplayDate;
