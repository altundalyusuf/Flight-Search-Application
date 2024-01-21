export function getTimeInMinutes(time) {
    const [hours, minutes] = time.split('.').map(Number);
    return hours * 60 + minutes;
}

export function getDurationInMinutes(duration) {
    const [hours, minutes] = duration.split('s').map(str => Number(str.trim()));
    return hours * 60 + minutes;
}

export function getPriceAsNumber(price) {
    return Number(price.split(' ')[0]);
}