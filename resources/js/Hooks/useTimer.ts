import TimeInputSettings from "@/Enums/TimeInputSettings";
import {Option} from "@/Types/Select";


export default function useTimer({minHour, maxHour, minMinutes, maxMinutes, stepMinutes = 15}: TimeInputSettings )  {

    const options : Option[] = []

    for (let hour = minHour; hour <= maxHour; hour++) {
        for (let minutes = minMinutes; minutes <= maxMinutes; minutes+=stepMinutes) {
            // options.push({label: `${hour}:${minutes}`, value: `${hour}:${minutes}`})
            //format hh::mm
            options.push({label: `${hour}:${minutes < 10 ? '0' + minutes : minutes}`, value: `${hour}:${minutes < 10 ? '0' + minutes : minutes}`})
        }
    }
    return options
}
