export function convertNumber(number) {
    if (number != undefined) {
        number = number.toString();
        let lastThree = number.substring(number.length - 3);
        let otherNumbers = number.substring(0, number.length - 3);
        if (otherNumbers != '')
            lastThree = '.' + lastThree;
        let output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + lastThree;
        return output;
    }
    return number;
}

export function convertNumberString(number) {
    number = number.toString();
    let lastThree = number.substring(number.length - 3);
    let otherNumbers = number.substring(0, number.length - 3);
    if (otherNumbers != '')
        lastThree = '.' + lastThree;
    let output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + lastThree;

    return output.toString();
}

export function convertToLetterCase(string) {
    if (string != undefined && string != null) {
        return string.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    }
    return string
}

export function convertUnderscoreToSpace(string) {
    if (string != undefined && string != null) {
        let word = string.split("_");
        let join = word.join(" ")
        return join;
    }
    return string
}

export function splitByCaps(string) {
    return string.split(/(?=[A-Z])/).join(" ");
}

export function splitToArray(string) {
    if (string != null) {
        let array = []
        let word = string.split(",");
        word.map((data, i) => {
            array.push({
                text: data,
                value: data
            })
        })
        return array;
    }
}

export function splitToArray2(string) {
    if (string != null) {
        let array = []
        let word = string.split("|");
        word.map((data, i) => {
            array.push({
                text: data,
                value: data
            })
        })
        return array;
    }
}

export function convertTrimDot(string) {
    let word = string.split(".");
    let join = word.join("")
    return join;
}

export function convertInputNumberFormat(string) {
    string = this.convertTrimDot(string)
    var reg = /^\d+$/;
    if (reg.test(string) === false) {
        return string, this.convertNumber(string), error = false
    } else {
        return string, this.convertNumber(string), error = true
    }
}

export function convertValidatorNumber(string) {
    var reg = /^\d+$/;
    if (reg.test(string) === false) {
        return false
    } else {
        return true
    }
}

export function ObjectLength(object) {
    var length = 0;
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            ++length;
        }
    }
    return length;
}

export function arrayToString(array) {
    var string = ""
    array.map((data, i) => {
        if (string != "") {
            string = string + ", "
        }
        string = string + data
    })
    return string
}