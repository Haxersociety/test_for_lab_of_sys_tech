import pkg from './utils.mjs';
const {deserialized, getCoefficient, serialized} = pkg;

let average_coefficient = 0

console.log('SIMPLE SHORT 50 NUMBERS')
function simple_short_50() {

    let test_arr = []

    for (let i = 0; i < 50; i++)
        test_arr.push(Math.ceil(Math.random() * 9))

    let serialized_str = serialized(test_arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(test_arr)
    average_coefficient += coef

    console.log('simple_string_50: ', test_arr.join(' '))
    console.log('serialized_string_50: ', serialized_str)
    console.log('deserialized_string_50: ', deserialized_str)
    console.log('coefficient: ', coef)

}
simple_short_50()
console.log('_______________________')

console.log('50 NUMBERS')
function simple_50() {

    let test_arr = []

    for (let i = 0; i < 50; i++)
        test_arr.push(Math.ceil(Math.random() * 300))

    let serialized_str = serialized(test_arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(test_arr)
    average_coefficient += coef

    console.log('simple_string_50: ', test_arr.join(' '))
    console.log('serialized_string_50: ', serialized_str)
    console.log('deserialized_string_50: ', deserialized_str)
    console.log('coefficient: ', coef)

}
simple_50()
console.log('_________')

console.log('100 NUMBERS')
function simple_100() {

    let test_arr = []

    for (let i = 0; i < 100; i++)
        test_arr.push(Math.ceil(Math.random() * 300))

    let serialized_str = serialized(test_arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(test_arr)
    average_coefficient += coef

    console.log('simple_string_100: ', test_arr.join(' '))
    console.log('serialized_string_100: ', serialized_str)
    console.log('deserialized_string_100: ', deserialized_str)
    console.log('coefficient: ', coef)

}
simple_100()
console.log('__________')

console.log('500 NUMBERS')
function simple_500() {

    let test_arr = []

    for (let i = 0; i < 500; i++)
        test_arr.push(Math.ceil(Math.random() * 300))

    let serialized_str = serialized(test_arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(test_arr)
    average_coefficient += coef

    console.log('simple_string_500: ', test_arr.join(' '))
    console.log('serialized_string_500: ', serialized_str)
    console.log('deserialized_string_500: ', deserialized_str)
    console.log('coefficient: ', coef)

}
simple_500()
console.log('___________')

console.log('1000 NUMBERS')
function simple_1000() {

    let test_arr = []

    for (let i = 0; i < 1000; i++)
        test_arr.push(Math.ceil(Math.random() * 300))

    let serialized_str = serialized(test_arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(test_arr)
    average_coefficient += coef

    console.log('simple_string_1000: ', test_arr.join(' '))
    console.log('serialized_string_1000: ', serialized_str)
    console.log('deserialized_string_1000: ', deserialized_str)
    console.log('coefficient: ', coef)

}
simple_1000()
console.log('____________')

console.log('ALL 1 SIGN')
function all_1_sign() {

    let test_arr = []

    for (let i = 0; i < 10; i++)
        test_arr.push(i)

    let serialized_str = serialized(test_arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(test_arr)
    average_coefficient += coef

    console.log('simple_string_1_sign: ', test_arr.join(' '))
    console.log('serialized_string_1_sign: ', serialized_str)
    console.log('deserialized_string_1_sign: ', deserialized_str)
    console.log('coefficient: ', coef)

}
all_1_sign()
console.log('__________')

console.log('ALL 2 SIGNS')
function all_2_signs() {

    let test_arr = []

    for (let i = 10; i < 100; i++)
        test_arr.push(i)

    let serialized_str = serialized(test_arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(test_arr)
    average_coefficient += coef

    console.log('simple_string_2_signs: ', test_arr.join(' '))
    console.log('serialized_string_2_signs: ', serialized_str)
    console.log('deserialized_string_2_signs: ', deserialized_str)
    console.log('coefficient: ', coef)

}
all_2_signs()
console.log('__________')

console.log('ALL 3 SIGNS')
function all_3_signs() {

    let test_arr = []

    for (let i = 100; i <= 300; i++)
        test_arr.push(i)

    let serialized_str = serialized(test_arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(test_arr)
    average_coefficient += coef

    console.log('simple_string_3_signs: ', test_arr.join(' '))
    console.log('serialized_string_3_signs: ', serialized_str)
    console.log('deserialized_string_3_signs: ', deserialized_str)
    console.log('coefficient: ', coef)

}
all_3_signs()
console.log('__________')

console.log('ALL x3 NUMBERS')
function all_x3_numbers() {

    let test_arr = []

    for (let i = 1; i <= 300; i++) {
        test_arr.push(i)
        test_arr.push(i)
        test_arr.push(i)
    }

    let serialized_str = serialized(test_arr)
    let deserialized_str = deserialized(serialized_str)
    let coef = getCoefficient(test_arr)
    average_coefficient += coef

    console.log('simple_string_2_sign: ', test_arr.join(' '))
    console.log('serialized_string_2_sign: ', serialized_str)
    console.log('deserialized_string_2_sign: ', deserialized_str)
    console.log('coefficient: ', coef)

}
all_x3_numbers()
console.log('__________')

average_coefficient /= 9

console.log('average_coefficient: ', average_coefficient)