import {Role} from "@/Types/Role";
import {Nullable} from "@/Types/Nullable";
import {Time} from "@/Types/Time";
import {Permission} from "@/Enums/Permission";

interface User {
    id: number
    name: string
    email: string
    profile_photo_path: string|undefined;
    profile_photo_url:  string|undefined;
    two_factor_enabled: boolean;
    email_verified_at: Nullable<Time>;
    created_at: Time;
    updated_at: Time;
    roles: Role[];
    permissions: Permission[];
}

export default User;
