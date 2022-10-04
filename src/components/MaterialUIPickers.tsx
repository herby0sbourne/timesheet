import * as React from "react";
import moment, { Moment } from "moment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useContext, useEffect } from "react";
import { StoreContext } from "../context/Store";

interface MaterialUIPickersProps {
    dutyType: (date: Moment | null) => void;
    today: Date | null;
}

const MaterialUIPickers = ({ dutyType, today }: MaterialUIPickersProps) => {
    const [value, setValue] = React.useState<Moment | null>(moment(today));
    // const [value, setValue] = React.useState<Moment | null>(moment(new Date()));

    const handleChange = (newValue: Moment | null) => {
        dutyType(newValue);
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Stack spacing={3}>
                {/*<DesktopDatePicker*/}
                {/*    label="Date desktop"*/}
                {/*    inputFormat="MM/DD/YYYY"*/}
                {/*    value={value}*/}
                {/*    onChange={handleChange}*/}
                {/*    renderInput={(params) => <TextField {...params} />}*/}
                {/*/>*/}
                {/*<MobileDatePicker*/}
                {/*    label="Date mobile"*/}
                {/*    inputFormat="MM/DD/YYYY"*/}
                {/*    value={value}*/}
                {/*    onChange={handleChange}*/}
                {/*    renderInput={(params) => <TextField {...params} />}*/}
                {/*/>*/}
                {/*<TimePicker*/}
                {/*    label="Time"*/}
                {/*    value={value}*/}
                {/*    onChange={handleChange}*/}
                {/*    renderInput={(params) => <TextField {...params} />}*/}
                {/*/>*/}
                <DateTimePicker
                    label="Date&Time picker"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
};

export default MaterialUIPickers;
