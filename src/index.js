exports.min = function min(array) {
    if (array == null || array.length == 0) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (min > array[i]) min = array[i];
        }
        return min;
    }
}

exports.max = function max(array) {
    if (array == null || array.length == 0) {
        return 0;
    } else {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (max < array[i]) max = array[i];
        }
        return max;
    }
}

exports.avg = function avg(array) {
    if (array == null || array.length == 0) {
        return 0;
    } else {
        let count = array.length;
        let summ = array[0];
        for (let i = 1; i < array.length; i++) {
            summ += array[i];
        }
        return Math.round((summ / count) * 100) / 100;
    }
}