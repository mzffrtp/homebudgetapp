export const specialCharsnadNumbers = (str) => {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;
    return format.test(str)
}


export const dateFormat = (dateof) => {
    var year = new Date().getFullYear;
    var month = new Date().getMonth() + 1
    if (month < 10) month = `0${month}`;
    var date = new Date().getDate();
    if (date < 10) date = `0${date}`;

    return `${year}-${month}-${date}`
}

export const capitalUpper = (str) =>{
    let temp = ""
    temp+= str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        temp += str[i].toLowerCase()
    }

    return temp;

}