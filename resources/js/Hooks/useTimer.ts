import {Option} from "@/Types/Select";


export default function useTimer(minHour: number, maxHour: number, minMinutes: number, maxMinutes: number) : Option[] {

    const options : Option[] = []
    const step = 15
    for (let hour = minHour; hour <= maxHour; hour++) {
        for (let minutes = minMinutes; minutes <= maxMinutes; minutes+=step) {
            // options.push({label: `${hour}:${minutes}`, value: `${hour}:${minutes}`})
            //format hh::mm
            options.push({label: `${hour}:${minutes < 10 ? '0' + minutes : minutes}`, value: `${hour}:${minutes < 10 ? '0' + minutes : minutes}`})
        }
    }
    return options
}
