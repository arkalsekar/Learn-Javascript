// Error Handling in JS
import { sample_obj, my_list, my_name, sample_obj } from './25_Iterables';

// let sample_obj = { 'name': 'Abdul Rehman Kalsekar', 'age': 18 };
let sample_obj = sample_obj
// Below block will run smoothly
try {
    // However if you put in a Key which is not defined it will throw undefined
    // let my_name = sample_obj.born_on;
    let my_name = sample_obj.name;
    console.log("My name is ", my_name)

} catch (error) {
    console.log(error)
}