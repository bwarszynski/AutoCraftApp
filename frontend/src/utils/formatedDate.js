export const formatedDate = (date, config) => {

    const defaultOptions = {day:'numeric', month:'long', year:'numeric'}
    const options = config ? config : defaultOptions

    return new Date(date).toLocaleDateString('pl-PL', options);
}