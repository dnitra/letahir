export default function validateHomeOrder(form:any) {

    Object.keys(form.data).forEach((key:any)=>{
        form.setError(key, '')
    })

    let isOk:boolean = true
    if (form.data.email === ''){
        form.setError('email', 'Vyplňte prosím email')
        isOk = false
    }

    if (form.data.phone === ''){
        form.setError('phone', 'Vyplňte prosím telefon')
        isOk = false
    }

    if (form.data.street === ''){
        form.setError('street', 'Vyplňte prosím ulici')
        isOk = false
    }
    if (form.data.streetNumber === ''){
        form.setError('streetNumber', 'Vyplňte prosím číslo popisné')
        isOk = false
    }
    if (form.data.city === ''){
        form.setError('city', 'Vyplňte prosím město')
        isOk = false
    }
    if (form.data.zip === ''){
        form.setError('zip', 'Vyplňte prosím PSČ')
        isOk = false
    }
    if (form.data.date === ''){
        form.setError('date', 'Vyplňte prosím datum')
        isOk = false
    }
    return isOk
}
