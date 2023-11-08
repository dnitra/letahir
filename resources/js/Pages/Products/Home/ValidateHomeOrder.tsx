import OrderData from "@/Pages/Products/Home/types/OrderDataInterface";
import Validation from "@/Types/Validation";

export default function validateHomeOrder(form: { data: OrderData; setError: (field: keyof OrderData, message: string) => void }) {
    const validationRules : Validation<OrderData> = {
        email: 'Vyplňte prosím email',
        phone: 'Vyplňte prosím telefon',
        street: 'Vyplňte prosím ulici',
        streetNumber: 'Vyplňte prosím číslo popisné',
        city: 'Vyplňte prosím město',
        zip: 'Vyplňte prosím PSČ',
        date: 'Vyplňte prosím datum',
    }

    // Reset errors for all fields using validationRules
    for (const key in form.data) {
        if (Object.prototype.hasOwnProperty.call(form.data, key)) {
            form.setError(key as keyof OrderData, '');
        }
    }

    // Check for missing values and set errors based on validationRules
    let isOk: boolean = true;
    let field: keyof OrderData;
    for (field in form.data) {
        if (Object.prototype.hasOwnProperty.call(form.data, field)) {
            if (form.data[field] === '' || form.data[field] === null) {
                const validationMessage = validationRules[field];
                if (validationMessage) {
                    form.setError(field, validationMessage);
                    isOk = false;
                }
            }
        }
    }

    return isOk;
}
