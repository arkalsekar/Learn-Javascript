//Linear Search
let linearSearch = (list,value)=>{
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return i;
        }
    }
    return -1;
}

var list =  [12, 45, 48, 5, 451, 2,34 ,43,54,66 ]
var value = 2;

linearSearch(list , value) // result should 5

//Binary Search
let BinarySearch = (list,val)=>{
    let left = 0;
    let right = list.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (list[mid] !== val && left <= right) {
        if (val < list[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
        mid = Math.floor((left + right) / 2);
    }
    if (list[mid] === val) {
        return mid;
    } else {
        return -1
    }

}
;

let list = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
let val = 20;
// should return 9
