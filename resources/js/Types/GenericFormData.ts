import {FormDataConvertible, VisitOptions} from "@inertiajs/core";
import {Method} from "axios";

type setDataByObject<TForm> = (data: TForm) => void;
type setDataByMethod<TForm> = (data: (previousData: TForm) => TForm) => void;
type setDataByKeyValuePair<TForm> = <K extends keyof TForm>(key: K, value: TForm[K]) => void;
type FormDataType = object;
type Progress = object;
export interface GenericFormData{
    [key: string]: any
}
