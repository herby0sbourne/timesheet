import { useState } from "react";
import CreateDuty from "./components/CreateDuty";
import Duty from "./components/Duty";

function App() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="header-info relative bg-gradient-radial">
                <div className="container px-4 m-auto h-[16vh]">
                    <div className="flex justify-between items-center">
                        <div className="heading">TimeSheet</div>
                        <div className="hours">$0.00/hour</div>
                    </div>
                    <button
                        className="create-duty py-2 px-3 text-white text-lg hover:bg-cyan-600 rounded-lg bg-[#101d2c]"
                        onClick={() => setOpenModal(true)}>
                        Create Duty
                    </button>
                    <div className="total-pay bg-white shadow-[0px_7px_13px_-6px_rgba(0,0,0,0.28);] translate-y-1/2 flex justify-between items-center absolute bottom-0 right-0 left-0 px-4 py-6 z-[2] m-auto w-[calc(100%-1rem)] rounded-[8px] font-medium tracking-wider">
                        <div className="total max-w-[50%] grow"> Total</div>
                        <div className="hours">24h</div>
                        <div className="money text-[#5aba8a]">$7,440.00</div>
                    </div>
                </div>
                <div className="duties-container bg-[#f9f7f6] h-screen fixed overflow-y-auto left-0 right-0 pt-8">
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                    <Duty />
                </div>
            </div>
            <CreateDuty closeModal={setOpenModal} openModal={openModal} />
        </>
    );
}

export default App;
