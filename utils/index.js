const isValidEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};

const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
}

const convertNumToTime = (number) => {
    console.log(number)
    var hour = Math.floor(number);
    var minute = Math.round(number - hour);


    hour.toString().length === 1 && (hour = '0' + hour);
    minute.toString().length === 1 && (minute = minute + '0');
    console.log('min', minute)
    return hour + ':' + minute;
}

export { convertNumToTime, isValidEmail, formatDate }