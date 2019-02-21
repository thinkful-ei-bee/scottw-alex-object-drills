'use strict';

function makeStudentReport(data) {
    let arr;
    for (let i = 0; i < data.length; i++) {
        arr[i] = data[i].name + ":" + data[i].grade;
    }
    return arr;
}

function enrollInSummerSchool(students) {
    for (let i = 0; i < students.length; i++) {
        students.status = 'In Summer School';
    }
    return students;
}

function findById(items, idNum) {
    return items.find(data => data.id === idNum);
}

function validateKeys(object, expectedKeys) {
    if (expectedKeys.length !== Object.keys(object).length) {
        return false;
    }

    for (let i = 0; i < expectedKeys.length; i++) {
        if (!object.hasOwnProperty(expectedKeys[i])) {
            return false;
        }
    }
    return true;
}