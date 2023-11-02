import SelectInput from "@/Components/FormHelpers/SelectInput";
import React from "react";
import useTimer from "@/Hooks/useTimer";
import {Option} from "@/Types/Select";
import TimeInputSettings from "@/Enums/TimeInputSettings";

interface TimeInputProps {
    form: any
    label: string
    timeInputSetting: TimeInputSettings
}
const TimeInput = ({timeInputSetting,label, form}: TimeInputProps) => {
    const times :Option[] = useTimer(timeInputSetting)
    return <SelectInput label={label} form={form} options={times} />
}

export default TimeInput
