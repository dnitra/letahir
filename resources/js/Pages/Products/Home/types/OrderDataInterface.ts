import PropertyType from "@/Enums/PropertyType";
import RegularityType from "@/Enums/RegularityType";
import {DATE} from "@/Types/Date";
import {Time} from "@/Types/Time";


type OrderData = {
    rooms: number;
    bathrooms: number;
    propertyType: PropertyType;
    regularity: RegularityType.SINGLETIME | RegularityType.WEEKLY | RegularityType.BIWEEKLY | RegularityType.MONTHLY;
    date: DATE |''
    time: Time;
    email: string;
    phone: string;
    street: string;
    streetNumber: string;
    city: string;
    zip: string;
    note: string;
    price: number;
}

export default OrderData;
