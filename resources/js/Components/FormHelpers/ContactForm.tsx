import ActionMessage from "@/Components/common/ActionMessage";
import PrimaryButton from "@/Components/common/PrimaryButton";
import classNames from "classnames";
import InputLabel from "@/Components/common/InputLabel";
import FormSection from "@/Components/common/FormSection";
import React, {PropsWithChildren} from "react";
import FormErrorMessage from "@/Components/FormHelpers/FormErrorMessage";

interface Props {
    form: any;
    handleSubmit: any;
}

export default function ContactForm({handleSubmit,form}:Props) : JSX.Element {
    return (
        <FormSection
            title={'Kontaktní údaje'}
            description={'Vyplňte kontaktní údaje'}
            onSubmit={handleSubmit}
            renderActions={() => (
                <>
                    <ActionMessage on={form.recentlySuccessful} className="mr-3">
                        Odesláno
                    </ActionMessage>
                    <PrimaryButton
                        className={classNames({ 'opacity-25': form.processing })}
                        disabled={form.processing}
                    >
                        Odeslat
                    </PrimaryButton>
                </>
            )}
        >
            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                <InputLabel htmlFor={'email'} value={'Email'} />
                <input
                    id="email"
                    type="email"
                    className="block w-full mt-1"
                    value={form.data.email}
                    onChange={(event) => {
                        form.setData('email', event.target.value)
                    }}
                    autoComplete={'email'}
                />
                <FormErrorMessage error={form.errors.email} />
            </div>
            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                <InputLabel htmlFor={'phone'} value={'Telefon'} />
                <input
                    id="phone"
                    type="tel"
                    className="block w-full mt-1"
                    value={form.data.phone}
                    onChange={(event) => {
                        form.setData('phone', event.target.value)
                    }}
                    autoComplete={'tel'}
                />
                <FormErrorMessage error={form.errors.phone} />
            </div>


            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                <InputLabel htmlFor={'street'} value={'Ulice a číslo popisné'} />
                <input
                    id="street"
                    type="text"
                    className="block w-full mt-1"
                    value={form.data.street}
                    onChange={(event) => {
                        form.setData('street', event.target.value)

                    }}
                    autoComplete={'street-address'}
                />
                <FormErrorMessage error={form.errors.street} />
            </div>

            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                <InputLabel htmlFor={'Město'} value={'Město'} />
                <input
                    id="city"
                    type="text"
                    className="block w-full mt-1"
                    value={form.data.city}
                    onChange={(event) => {
                        form.setData('city', event.target.value)
                    }}
                    autoComplete={'address-level2'}
                />
                <FormErrorMessage error={form.errors.city} />
            </div>
            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                <InputLabel htmlFor={'PSČ'} value={'PSČ'} />
                <input
                    id="zip"
                    type="text"
                    className="block w-full mt-1"
                    value={form.data.zip}
                    onChange={(event) => {
                        form.setData('zip', event.target.value)
                    }}
                    autoComplete={'postal-code'}
                />
                <FormErrorMessage error={form.errors.zip} />
            </div>
            {/*    poznamka*/}
            <div className="col-span-6 flex flex-col gap-2 lg:col-span-3">
                <InputLabel htmlFor={'Poznámka'} value={'Poznámka'} />
                <textarea
                    id="note"
                    className="block w-full mt-1"
                    value={form.data.note}
                    onChange={(event) => {
                        form.setData('note', event.target.value)
                    }}
                    autoComplete={'note'}
                />
            </div>

        </FormSection>
    )
}
