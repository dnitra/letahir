import {Role} from "@/Types/Role";
import {Nullable} from "@/Types/Nullable";
import {DateTime} from "@/Types/DateTime";
import {Permission} from "@/Enums/Permission";

interface User {
    id: number
    name: string
    email: string
    profile_photo_path: string|undefined;
    profile_photo_url:  string|undefined;
    two_factor_enabled: boolean;
    email_verified_at: Nullable<DateTime>;
    created_at: DateTime;
    updated_at: DateTime;
    roles: Role[];
    permissions: Permission[];
}

export default User;
