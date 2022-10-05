import { useState } from "react";
import CreateDuty from "./components/CreateDuty";
import Duty from "./components/Duty";

function App() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="header-info">
                <div className="container px-4 border-b-2 border-sky-500">
                    <div className="flex justify-between items-center">
                        <div className="heading">TimeSheet</div>
                        <div className="hours">$0.00/hour</div>
                    </div>
                    <button
                        className="create-duty py-2 px-3 text-white text-lg hover:bg-cyan-600 rounded-lg bg-[#101d2c]"
                        onClick={() => setOpenModal(true)}>
                        Create Duty
                    </button>
                    <div className="total-pay flex justify-between items-center">
                        <div className="total max-w-[50%] grow"> Total</div>
                        <div className="hours">24h</div>
                        <div className="money text-[#5aba8a]">$7,440.00</div>
                    </div>
                </div>
                <div className="duties-container bg-[#f9f7f6]">
                    <Duty />
                    <Duty />
                </div>
            </div>
            <CreateDuty closeModal={setOpenModal} openModal={openModal} />
        </>
    );
}

export default App;
