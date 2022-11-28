function serialized(array) {
    let new_arr = Array(300).fill(0)
    array.forEach(n => new_arr[n]++)
    let str = ''
    new_arr.forEach((n, i) => {
        if (n > 0) {
            if (n > 1)
                str += n
            str += String.fromCharCode(i + 33) + ' '
        }
    })
    return str.trimEnd()
}

function deserialized(string) {
    let new_arr = []
    string.split(' ').forEach(n => {
        if (n.length > 1)
            new_arr = new_arr.concat(n.slice(-1).repeat(+n.slice(0, -1)).split('').map(n => n.charCodeAt(0) - 33))
        else
            new_arr.push(n.charCodeAt(0) - 33)

    })
    return new_arr
}

function getCoefficient(array) {
    let str = array.join(' ')
    let ser_str = serialized(array)
    return 1 - ser_str.length / str.length
}

export default {serialized, deserialized, getCoefficient}