// ==================================================
// STUDENT UTILITY MODULE
// ==================================================


// Named Export
export const DEPARTMENT_NAME = "Computer Science";



// Named Export
// Rest Parameter
export function calculateTotal(...marks) {

    return marks.reduce((total, mark) => {

        return total + mark;

    }, 0);

}



// Named Export
// Arrow Function
export const calculateAverage = (...marks) => {

    const total = calculateTotal(...marks);

    return total / marks.length;

};



// Named Export
export function getGrade(marks) {

    if (marks >= 80) {
        return "A";
    }

    else if (marks >= 70) {
        return "B";
    }

    else if (marks >= 60) {
        return "C";
    }

    else if (marks >= 50) {
        return "D";
    }

    else {
        return "F";
    }

}



// Named Export
// Arrow Function + Ternary
export const getStatus = (marks) => {

    return marks >= 50
        ? "Pass"
        : "Fail";

};



// Default Export
export default function formatStudentResult(
    name,
    rollNumber,
    total
) {

    return `${name} - ${rollNumber} - Total: ${total}`;

}