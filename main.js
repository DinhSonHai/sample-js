//Biến chứa giá trị họ tên
var fullName = "          Dinh Son           Hai      ";

console.log(fullName.trim());

//alert(fullName);

var a = 6;

var b = ++a * 2 - a-- * 2 + a++;

console.log(b + ", " + a);

var c;

var id = Symbol('id');
var id2 = Symbol('id');

console.log(id == id2);

var myArray = [0, 'Mot'];

console.log(myArray);
console.log(typeof myArray);

console.log('logical operator', true && false && 'B');

var languages = 'JS, C++, C#';
console.log(languages.split(''));

var result;

console.log(typeof result);

if (result == null && languages.length >= 1) {
    result = true;
}
else {
    result = false;
}

console.log(result);

var myLanguages = ['JS', 'C++', 'C#'];
console.log(myLanguages);
myLanguages.splice(1, 0, 'Java')
console.log(myLanguages);
console.log(myLanguages.slice(-3, -1));

numbers = [1, -8, 3];

var isTrue = numbers.every(function(number) {
    return number > 0;
});

console.log(isTrue);

var keyword = 'PHP';
var strings = ['Javascript', 'PHP', 'Học PHP'];

function findStringsInArrayByKeyword(keyword, strings) {

    var listString = strings.filter(function(string) {
        if (string.indexOf(keyword) >= 0) {
            return true;
        }
        return false;
    })

    if (listString.length > 0) {
        return listString;
    }
    return null;

}

console.log(findStringsInArrayByKeyword(keyword, strings));

function findEqualValues(array1, array2) {
    var arr = [];
    var index = 0;
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array1.length; j++) {
            if (array1[i] == array2[j]) {
                arr[index++] = array1[i];
            }
        }
    }
    return arr;
}

var arr1 = [1, 2, 6, 8];
var arr2 = [2, 9, 6];

console.log(findEqualValues(arr1, arr2));