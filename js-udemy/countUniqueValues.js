function countUniqueValues(array){
    if(array.length == 0) {
        return 0;
    }
    let res = 1;
    let tmp =array[0];
    for(var i=1; i<array.length; i++) {
        if(array[i] == tmp) {
            continue;
        } else {
            res++;
            tmp = array[i];
        }
    }
    return res;
}
countUniqueValues([1,1,1,1,1,1,1,2,2,3,4])