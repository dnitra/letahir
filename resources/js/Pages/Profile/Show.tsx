import React from 'react';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';
import LogoutOtherBrowserSessions from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import useTypedPage from '@/Hooks/useTypedPage';
import SectionBorder from '@/Components/common/SectionBorder';
import AppLayout from '@/Layouts/AppLayout';
import Session from "@/Types/Session";
import User from "@/Types/User";
import user from "@/Types/User";

interface Props {
  sessions: Session[];
  confirmsTwoFactorAuthentication: boolean;
}

export default function Show({
  sessions,
  confirmsTwoFactorAuthentication,
}: Props) {
  const page = useTypedPage();
  const user = page.props.auth

  return (
    <>
      {page.props.jetstream.canUpdateProfileInformation ? (
        <div>
          <UpdateProfileInformationForm user={user} />

          <SectionBorder />
        </div>
      ) : null}

      {page.props.jetstream.canUpdatePassword ? (
        <div className="mt-10 sm:mt-0">
          <UpdatePasswordForm />

          <SectionBorder />
        </div>
      ) : null}

      {page.props.jetstream.canManageTwoFactorAuthentication ? (
        <div className="mt-10 sm:mt-0">
          <TwoFactorAuthenticationForm
            requiresConfirmation={confirmsTwoFactorAuthentication}
          />

          <SectionBorder />
        </div>
      ) : null}

      <div className="mt-10 sm:mt-0">
        <LogoutOtherBrowserSessions sessions={sessions} />
      </div>

      {page.props.jetstream.hasAccountDeletionFeatures ? (
        <>
          <SectionBorder />

          <div className="mt-10 sm:mt-0">
            <DeleteUserForm />
          </div>
        </>
      ) : null}
    </>
  );
}
