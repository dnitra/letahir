import React from 'react';

interface Props {
    error: any
}

const FormErrorMessage: React.FC<Props> = ({ error }: Props): JSX.Element | null => {
    return (
        error && (
            <>
                <div className="mt-2 text-sm text-red-600">
                    {error}
                </div>
            </>
        )
    );
};

export default FormErrorMessage;
