function validAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }
    var obj1 = {};
    var obj2 = {};

    for(let item in str1) {
        obj1[item] = (obj1[item] || 0) + 1;
    }
    for(let item in str2) {
        obj2[item] = (obj2[item] || 0) + 1;
    }

    for(let item in str1) {
        if(obj1[item] != obj2[item]) {
            return false;
        }
    }
    return true;
}

validAnagram("hello", "lloeh")