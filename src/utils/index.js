export const sortByDateString = (a, b) => {
    let d1 = new Date(a),
        d2 = new Date(b);
    return d1 > d2;
}

export const minutesToHours = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = Math.round((num/60 - hours) * 60);
    return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;
}