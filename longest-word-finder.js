export function longestWord(str) {

    if (typeof str === "number" || typeof str === "boolean" || str == null || typeof str === "undefined"){
        throw 'This is not a string.';
    } else if (!str.trim()) {
        throw 'string is empty.';
    }
    
    let strArr = str.trim().split(' ');
    let longestStrSize=0;
    let longestStr='';
    // if (strArr== false) {
    //     throw 'string is empty';
    // }

    for (let x=0;x < strArr.length ;x++) {
        if(strArr[x].length > longestStrSize)
            {
                longestStrSize = strArr[x].length;
                longestStr = strArr[x];
            }
    }

    return {'longestStr' : longestStr, 'longestStrSize' : longestStrSize}

}