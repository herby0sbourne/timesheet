const Duty = () => {
    return (
        <div className="duty bg-[#f9f7f6] mb-2.5">
            <div className="date flex justify-between items-center">
                <div className="date-worked">Sun September 25, 2222</div>
                <div className="cost">$3,744.00</div>
            </div>
            <div className="work-hours">
                <div className="hour flex justify-between items-center">
                    <div className="time-in-out">
                        <span className="time-in inline-block mr-8 text-[#b28451]">
                            7:00 AM
                        </span>
                        <span className="time-out inline-block">7:00 PM</span>
                    </div>
                    <div className="total-hours">12h</div>
                </div>
            </div>
            <div className="location">
                <div>Cotton Factory</div>
            </div>
        </div>
    );
};

export default Duty;
