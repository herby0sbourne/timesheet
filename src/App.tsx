import React from "react";
import Duty from "./components/Duty";

import "./App.css";
import CreateDuty from "./components/CreateDuty";

function App() {
    return (
        <div className="app">
            <CreateDuty />
            {/*<div className="container p-4">*/}
            {/*    <div className="flex justify-between items-center">*/}
            {/*        <div className="heading">TimeSheet</div>*/}
            {/*        <div className="hours">$0.00/hour</div>*/}
            {/*    </div>*/}
            {/*    <button className="create-duty py-2 px-3 text-white text-lg bg-black hover:bg-cyan-600 rounded-lg bg-[#101d2c]">*/}
            {/*        Create Duty*/}
            {/*    </button>*/}
            {/*    <div className="total-pay flex justify-between items-center border-b-2 border-sky-500">*/}
            {/*        <div className="total max-w-[50%] grow"> Total</div>*/}
            {/*        <div className="hours">24h</div>*/}
            {/*        <div className="money text-[#5aba8a]">$7,440.00</div>*/}
            {/*    </div>*/}
            {/*    <div className="duties-container">*/}
            {/*        <Duty />*/}
            {/*        <Duty />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
