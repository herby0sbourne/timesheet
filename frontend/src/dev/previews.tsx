import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import CreateJob from "../components/CreateJob";
import App from "../App";
import CreateDuty from "../components/CreateDuty";
import JobDetails from "../components/JobDetails";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/CreateJob">
                <CreateJob />
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews />
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App />
            </ComponentPreview>
            <ComponentPreview path="/CreateDuty">
                <CreateDuty
                    openModal={true}
                    closeModal={() => {
                        false;
                    }}
                />
            </ComponentPreview>
            <ComponentPreview path="/JobDetails">
                <JobDetails />
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
