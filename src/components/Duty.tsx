const Duty = () => {
    return (
        <div className="duty bg-[#f9f7f6] px-4 pt-4 pb-2 border-b-2 border-[#f5deb3]">
            <div className="date flex justify-between items-center">
                <div className="date-worked">Sun September 25, 2222</div>
                <div className="cost">$3,744.00</div>
            </div>
            <div className="work-hours">
                <div className="hour flex justify-between items-center">
                    <div className="time-in-out">
                        <span className="time-in inline-block mr-8 text-[#b28451]">7:00 AM</span>
                        <span className="time-out inline-block">7:00 PM</span>
                    </div>
                    <div className="total-hours">12h</div>
                </div>
            </div>
            <div className="location font-semibold text-[13px] mt-1 text-gray-400">
                <div>Location: Cotton Factory</div>
            </div>
        </div>
    );
};

export default Duty;
