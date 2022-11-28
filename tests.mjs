import pkg from './utils.mjs';
const {deserialized, getCoefficient, serialized} = pkg;

let average_coefficient = 0

const test = (arr, name) => {

    let serialized_str = serialized(arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(arr)
    average_coefficient += coef

    console.log(`TEST ${name}: `)
    console.log(`simple_str_${name}: `, arr.join(' '))
    console.log(`serialized_${name}: `, serialized_str)
    console.log(`deserialized_${name}: `, deserialized_str)
    console.log(`coef_${name}: `, coef)

    console.log('')
}

const test_short_50 = () => {
    let test_arr = []
    for (let i = 0; i < 50; i++)
        test_arr.push(Math.ceil(Math.random() * 9))
    return test_arr
}

const test_50 = () => {
    let test_arr = []
    for (let i = 0; i < 50; i++)
        test_arr.push(Math.ceil(Math.random() * 300))
    return test_arr
}
const test_100 = () => {
    let test_arr = []

    for (let i = 0; i < 100; i++)
        test_arr.push(Math.ceil(Math.random() * 300))
    return test_arr
}
const test_500 = () => {
    let test_arr = []
    for (let i = 0; i < 500; i++)
        test_arr.push(Math.ceil(Math.random() * 300))
    return test_arr
}
const test_1000 = () => {
    let test_arr = []
    for (let i = 0; i < 1000; i++)
        test_arr.push(Math.ceil(Math.random() * 300))
    return test_arr
}

const test_1_sign = () => {
    let test_arr = []
    for (let i = 0; i < 10; i++)
        test_arr.push(i)
    return test_arr
}

const test_2_signs = () => {
    let test_arr = []
    for (let i = 10; i < 100; i++)
        test_arr.push(i)
    return test_arr
}

const test_3_signs = () => {
    let test_arr = []

    for (let i = 100; i <= 300; i++)
        test_arr.push(i)

    return test_arr
}

const test_x3_nums = () => {
    let test_arr = []

    for (let i = 1; i <= 300; i++) {
        test_arr.push(i)
        test_arr.push(i)
        test_arr.push(i)
    }
    return test_arr
}

test(test_short_50(), 'short_50')
test(test_50(), '50_numbers')
test(test_100(), '100_numbers')
test(test_500(), '500_numbers')
test(test_1000(), '1000_numbers')
test(test_1_sign(), '1_sign')
test(test_2_signs(), '2_signs')
test(test_3_signs(), '3_signs')
test(test_x3_nums(), 'x3_nums')

average_coefficient /= 9
console.log('average_coefficient: ', average_coefficient)