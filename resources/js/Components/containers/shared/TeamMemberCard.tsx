import React from 'react';

interface Props {
    member: {
        name: string;
        role: string;
        avatar: string;
    };
}


export default function TeamMemberCard({ member }: Props) {
    return (
        <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
        <div className="flex-shrink-0">
            <img
            className="w-full rounded-full"
            src={member.avatar}
            alt={member.name}
            />
        </div>
        <div className="text-center">
            <h3 className="text-xl font-medium text-secondary">
            {member.name}
            </h3>
            <p className="mt-1 text-lg text-gray-500">
            {member.role}
            </p>
        </div>
        </div>
    );
}
