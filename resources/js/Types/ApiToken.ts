import { Time } from "@/Types/Time";
import { Nullable } from "@/Types/Nullable";
interface ApiToken {
    id: number;
    name: string;
    abilities: string[];
    last_used_ago: Nullable<Time>;
    created_at: Time;
    updated_at: Time;
}
export default ApiToken;
