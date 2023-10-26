import { DateTime } from "@/Types/DateTime";
import { Nullable } from "@/Types/Nullable";
interface ApiToken {
    id: number;
    name: string;
    abilities: string[];
    last_used_ago: Nullable<DateTime>;
    created_at: DateTime;
    updated_at: DateTime;
}
export default ApiToken;
