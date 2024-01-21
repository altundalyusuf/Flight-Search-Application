export function getTimeInMinutes(time) {
    const [hours, minutes] = time.split('.').map(Number);
    return hours * 60 + minutes;
}

export function getDurationInMinutes(duration) {
    const [hours, minutes] = duration.split('s').map(str => str.trim());
    const hoursInMinutes = parseInt(hours) * 60;
    const minutesWithoutSuffix = parseInt(minutes.replace('dk', ''));
    return hoursInMinutes + minutesWithoutSuffix;
}

export function getPriceAsNumber(price) {
    return Number(price.split(' ')[0]);
}