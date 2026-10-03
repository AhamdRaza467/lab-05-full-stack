// =========================================================
// IMPORTS FROM studentUtils.js
// =========================================================


import formatStudentResult, {

    DEPARTMENT_NAME,

    calculateTotal,

    // Alias Import
    calculateAverage as averageMarks,

    getGrade,

    getStatus

} from "./studentUtils.js";





// =========================================================
// =========================================================
// TASK 1
// UNIVERSITY COURSE ENROLLMENT MANAGER
// =========================================================
// =========================================================


// Core Courses
const coreCourses = [

    "Web Development",

    "Database Systems",

    "Data Structures"

];



// Elective Courses
const electiveCourses = [

    "Artificial Intelligence",

    "Computer Networks",

    "Cloud Computing"

];



// Student Object
const student = {

    name: "Ahmad",

    rollNumber: "BSCS-001",

    department: "Computer Science",

    semester: 4

};



// CGPA Array
const cgpaValues = [

    3.20,

    3.50,

    3.10,

    3.80,

    3.40

];



// ------------------------------------------
// Spread Operator
// ------------------------------------------


const allCourses = [

    ...coreCourses,

    ...electiveCourses

];



// Copy of array using Spread
const copiedCourses = [

    ...allCourses

];



// Add course only to copy
copiedCourses.push(
    "Software Engineering"
);



// ------------------------------------------
// Object Spread
// ------------------------------------------


const updatedStudent = {

    ...student,

    semester: 5,

    cgpa: 3.65

};



// ------------------------------------------
// Rest Parameter
// ------------------------------------------


function enrollStudent(
    name,
    ...courses
) {

    return `${name} enrolled in ${courses.length} course(s): ${courses.join(", ")}`;

}



// ------------------------------------------
// Rest + Arrow Function
// ------------------------------------------


const calculateAverageCGPA = (...cgpas) => {

    const total = cgpas.reduce(

        (sum, cgpa) => sum + cgpa,

        0

    );


    return total / cgpas.length;

};



// Spread Array into Function
const averageCGPA =

    calculateAverageCGPA(
        ...cgpaValues
    );



// Math.max + Spread
const highestCGPA =

    Math.max(
        ...cgpaValues
    );



// ------------------------------------------
// Default Parameter
// ------------------------------------------


function getStudentInfo(

    name,

    department = "Computer Science"

) {

    return `${name} belongs to ${department}`;

}



// Enrollment Message
const enrollmentMessage =

    enrollStudent(

        student.name,

        coreCourses[0],

        coreCourses[1],

        electiveCourses[0]

    );



// DOM
const task1Output =

    document.getElementById(
        "task1Output"
    );



// Display Task 1
task1Output.innerHTML = `


<div class="col-md-6">

    <div class="card">

        <div class="card-body">

            <h5 class="card-title">
                Courses
            </h5>


            <p>

                <strong>
                    Core Courses:
                </strong>

                ${coreCourses.join(", ")}

            </p>


            <p>

                <strong>
                    Elective Courses:
                </strong>

                ${electiveCourses.join(", ")}

            </p>


            <p>

                <strong>
                    All Courses (${allCourses.length}):
                </strong>

                ${allCourses.join(", ")}

            </p>

        </div>

    </div>

</div>



<div class="col-md-6">

    <div class="card">

        <div class="card-body">

            <h5>
                Spread Operator Copy
            </h5>


            <p>

                Original Array:

                ${allCourses.join(", ")}

            </p>


            <p>

                Original Course Count:

                ${allCourses.length}

            </p>


            <p>

                Copied Array:

                ${copiedCourses.join(", ")}

            </p>


            <p>

                Copied Course Count:

                ${copiedCourses.length}

            </p>

        </div>

    </div>

</div>



<div class="col-md-6">

    <div class="card">

        <div class="card-body">

            <h5>
                Student Object
            </h5>


            <p>

                Original Student:

                ${student.name},

                Semester ${student.semester}

            </p>


            <p>

                Updated Student:

                ${updatedStudent.name},

                Semester ${updatedStudent.semester},

                CGPA ${updatedStudent.cgpa}

            </p>

        </div>

    </div>

</div>



<div class="col-md-6">

    <div class="card">

        <div class="card-body">

            <h5>
                Enrollment & CGPA
            </h5>


            <p>

                ${enrollmentMessage}

            </p>


            <p>

                Average CGPA:

                ${averageCGPA.toFixed(2)}

            </p>


            <p>

                Highest CGPA:

                ${highestCGPA}

            </p>


            <p>

                Department Default:

                ${getStudentInfo(student.name)}

            </p>

        </div>

    </div>

</div>

`;





// =========================================================
// =========================================================
// TASK 2
// STUDENT UTILITY MODULE
// =========================================================
// =========================================================


const task2Students = [

    {

        name: "Sara",

        rollNumber: "BSCS-023",

        assignment: 20,

        midterm: 25,

        finalExam: 37

    },


    {

        name: "Ahmed",

        rollNumber: "BSCS-002",

        assignment: 17,

        midterm: 20,

        finalExam: 30

    },


    {

        name: "Ayesha",

        rollNumber: "BSCS-014",

        assignment: 13,

        midterm: 15,

        finalExam: 20

    },


    {

        name: "Hassan",

        rollNumber: "BSCS-031",

        assignment: 18,

        midterm: 22,

        finalExam: 33

    }

];



// Display Department
document.getElementById(

    "departmentName"

).textContent =

    `Department: ${DEPARTMENT_NAME}`;





const task2Output =

    document.getElementById(
        "task2Output"
    );



// forEach
task2Students.forEach(

    student => {


        // Object Destructuring
        const {

            name,

            rollNumber,

            assignment,

            midterm,

            finalExam

        } = student;



        // Total
        const total =

            calculateTotal(

                assignment,

                midterm,

                finalExam

            );



        // Average
        const average =

            averageMarks(

                assignment,

                midterm,

                finalExam

            );



        // Grade
        const grade =

            getGrade(
                total
            );



        // Pass / Fail
        const status =

            getStatus(
                total
            );



        // Default Export Function
        const formattedResult =

            formatStudentResult(

                name,

                rollNumber,

                total

            );



        // Dynamic Card
        task2Output.innerHTML += `


        <div class="col-md-6 col-lg-3">

            <div class="card">

                <div class="card-body">

                    <h5>

                        ${name}

                    </h5>


                    <p>

                        ${formattedResult}

                    </p>


                    <p>

                        Average:

                        ${average.toFixed(2)}

                    </p>


                    <p>

                        Grade:

                        ${grade}

                    </p>


                    <p>

                        Status:

                        <span class="${
                            status === "Pass"
                                ? "status-pass"
                                : "status-fail"
                        }">

                        ${status}

                        </span>

                    </p>

                </div>

            </div>

        </div>

        `;

    }

);





// =========================================================
// =========================================================
// TASK 3
// ONLINE EXAMINATION WORKFLOW
// =========================================================
// =========================================================


const task3Output =

    document.getElementById(
        "task3Output"
    );



// Function to display messages
function displayExamMessage(

    message,

    type = "normal"

) {

    const paragraph =

        document.createElement(
            "p"
        );


    paragraph.textContent =
        message;



    if (type === "error") {

        paragraph.classList.add(
            "error-text"
        );

    }


    task3Output.appendChild(
        paragraph
    );

}



// ------------------------------------------
// Error-First Callback
// ------------------------------------------


function verifyStudent(

    rollNumber,

    callback

) {

    setTimeout(() => {


        if (!rollNumber.trim()) {

            callback(

                "Roll number is required",

                null

            );


            return;

        }



        callback(

            null,

            `Student ${rollNumber} verified`

        );


    }, 1000);

}



// Load Exam Paper
function loadExamPaper(
    callback
) {

    setTimeout(() => {

        callback(
            "Exam paper loaded"
        );

    }, 1500);

}



// Submit Answers
function submitAnswers(
    callback
) {

    setTimeout(() => {

        callback(
            "Answers submitted"
        );

    }, 2000);

}



// Generate Result
function generateResult(
    callback
) {

    setTimeout(() => {

        callback(
            "Result generated: 82 marks"
        );

    }, 1000);

}



// ------------------------------------------
// Nested Callbacks
// ------------------------------------------


function runExamWorkflow(
    rollNumber
) {

    task3Output.innerHTML = "";


    displayExamMessage(
        "Exam workflow started..."
    );



    /*
        This is called callback hell because
        callbacks are nested inside other callbacks.
        Deep nesting makes code harder to read,
        understand and maintain.
    */


    verifyStudent(

        rollNumber,

        (error, verificationMessage) => {


            // Error Handling
            if (error) {

                displayExamMessage(

                    `Error: ${error}`,

                    "error"

                );


                return;

            }



            displayExamMessage(

                `Step 1: ${verificationMessage}`

            );



            loadExamPaper(

                paperMessage => {


                    displayExamMessage(

                        `Step 2: ${paperMessage}`

                    );



                    submitAnswers(

                        answerMessage => {


                            displayExamMessage(

                                `Step 3: ${answerMessage}`

                            );



                            generateResult(

                                resultMessage => {


                                    displayExamMessage(

                                        `Step 4: ${resultMessage}`

                                    );


                                    displayExamMessage(

                                        "Exam completed successfully!"

                                    );

                                }

                            );

                        }

                    );

                }

            );

        }

    );

}



// Valid Exam Button
document.getElementById(

    "validExamBtn"

).addEventListener(

    "click",

    () => {

        runExamWorkflow(
            "BSCS-001"
        );

    }

);



// Invalid Exam Button
document.getElementById(

    "invalidExamBtn"

).addEventListener(

    "click",

    () => {

        runExamWorkflow(
            ""
        );

    }

);





// =========================================================
// =========================================================
// TASK 4
// UNIVERSITY RESULT PORTAL
// =========================================================
// =========================================================


// Simulated Database
const resultStudents = [

    {

        name: "Ali",

        rollNumber: "BSCS-001",

        department: "Computer Science",

        semester: 6,

        assignment: 20,

        midterm: 25,

        finalExam: 37

    },


    {

        name: "Ahmed",

        rollNumber: "BSCS-002",

        department: "Computer Science",

        semester: 5,

        assignment: 17,

        midterm: 20,

        finalExam: 30

    },


    {

        name: "Sara",

        rollNumber: "BSCS-023",

        department: "Computer Science",

        semester: 6,

        assignment: 20,

        midterm: 25,

        finalExam: 40

    },


    {

        name: "Ayesha",

        rollNumber: "BSCS-014",

        department: "Computer Science",

        semester: 4,

        assignment: 13,

        midterm: 15,

        finalExam: 20

    },


    {

        name: "Hassan",

        rollNumber: "BSCS-031",

        department: "Computer Science",

        semester: 5,

        assignment: 18,

        midterm: 22,

        finalExam: 33

    }

];





// =========================================================
// Promise Function 1
// findStudent()
// =========================================================


function findStudent(
    rollNumber
) {

    return new Promise(

        (resolve, reject) => {


            setTimeout(() => {


                const student =

                    resultStudents.find(

                        student =>

                            student.rollNumber ===
                            rollNumber

                    );



                if (student) {

                    resolve(
                        student
                    );

                }


                else {

                    reject(
                        "Student not found"
                    );

                }


            }, 1000);

        }

    );

}





// =========================================================
// Promise Function 2
// calculateResult()
// =========================================================


function calculateResult(
    student
) {

    return new Promise(

        (resolve) => {


            setTimeout(() => {


                // Object Destructuring
                const {

                    assignment,

                    midterm,

                    finalExam

                } = student;



                const total =

                    calculateTotal(

                        assignment,

                        midterm,

                        finalExam

                    );



                const average =

                    total / 3;



                const grade =

                    getGrade(
                        total
                    );



                // Arrow Function + Ternary
                const checkStatus =

                    score =>

                        score >= 50

                            ? "Pass"

                            : "Fail";



                const status =

                    checkStatus(
                        total
                    );



                resolve({

                    total,

                    average,

                    grade,

                    status

                });


            }, 1000);

        }

    );

}





// =========================================================
// Result Card Function
// =========================================================


function createResultCard(

    student,

    result

) {


    // Student Destructuring
    const {

        name,

        rollNumber,

        department,

        semester

    } = student;



    // Result Destructuring
    const {

        total,

        average,

        grade,

        status

    } = result;



    return `


        <div class="card">

            <div class="card-body">


                <h5>

                    ${name}

                </h5>


                <p>

                    <strong>
                        Roll No:
                    </strong>

                    ${rollNumber}

                </p>


                <p>

                    <strong>
                        Department:
                    </strong>

                    ${department}

                </p>


                <p>

                    <strong>
                        Semester:
                    </strong>

                    ${semester}

                </p>


                <p>

                    <strong>
                        Total:
                    </strong>

                    ${total}

                </p>


                <p>

                    <strong>
                        Average:
                    </strong>

                    ${average.toFixed(2)}

                </p>


                <p>

                    <strong>
                        Grade:
                    </strong>

                    ${grade}

                </p>


                <p>

                    <strong>
                        Status:
                    </strong>


                    <span class="${
                        status === "Pass"
                            ? "status-pass"
                            : "status-fail"
                    }">

                        ${status}

                    </span>

                </p>


            </div>

        </div>

    `;

}





// =========================================================
// TASK 4 PART A
// PROMISE CHAIN
// then() catch() finally()
// =========================================================


const promiseOutput =

    document.getElementById(
        "promiseOutput"
    );



function runPromiseDemo() {


    promiseOutput.innerHTML =

        "<p>Searching...</p>";



    let foundStudent;



    findStudent(
        "BSCS-001"
    )


    .then(student => {


        foundStudent =
            student;


        return calculateResult(
            student
        );

    })


    .then(result => {


        promiseOutput.innerHTML +=

            createResultCard(

                foundStudent,

                result

            );

    })


    .catch(error => {


        promiseOutput.innerHTML += `

            <p class="error-text">

                Error: ${error}

            </p>

        `;

    })


    .finally(() => {


        promiseOutput.innerHTML += `

            <p class="mt-3">

                Search completed

            </p>

        `;

    });

}



document.getElementById(

    "promiseDemoBtn"

).addEventListener(

    "click",

    runPromiseDemo

);





// =========================================================
// TASK 4 PART B + C
// ASYNC / AWAIT SEARCH
// =========================================================


const searchOutput =

    document.getElementById(
        "searchOutput"
    );



async function showResult(
    rollNumber
) {


    searchOutput.innerHTML =

        "<p>Searching...</p>";



    try {


        const student =

            await findStudent(
                rollNumber
            );



        const result =

            await calculateResult(
                student
            );



        searchOutput.innerHTML =

            createResultCard(

                student,

                result

            );

    }



    catch (error) {


        searchOutput.innerHTML = `

            <p class="error-text">

                Error: ${error}

            </p>

        `;

    }



    finally {


        searchOutput.innerHTML += `

            <p class="mt-3">

                Search completed

            </p>

        `;

    }

}



// Search Button
document.getElementById(

    "searchBtn"

).addEventListener(

    "click",

    () => {


        const rollNumber =

            document
                .getElementById(
                    "rollInput"
                )
                .value
                .trim();



        showResult(
            rollNumber
        );

    }

);





// =========================================================
// TASK 4 PART D
// PROMISE.ALL()
// =========================================================


const allResultsOutput =

    document.getElementById(
        "allResultsOutput"
    );



const statisticsOutput =

    document.getElementById(
        "statisticsOutput"
    );



async function loadAllResults() {


    allResultsOutput.innerHTML = `

        <p>

            Loading all results...

        </p>

    `;



    statisticsOutput.innerHTML = "";



    try {


        // map() creates promises
        const resultPromises =

            resultStudents.map(

                student =>

                    calculateResult(
                        student
                    )

            );



        // Run all promises together
        const results =

            await Promise.all(

                resultPromises

            );



        allResultsOutput.innerHTML = "";



        let passedStudents = 0;

        let failedStudents = 0;



        results.forEach(

            (result, index) => {


                const student =

                    resultStudents[index];



                if (
                    result.status === "Pass"
                ) {

                    passedStudents++;

                }


                else {

                    failedStudents++;

                }



                allResultsOutput.innerHTML += `


                    <div class="col-md-6 col-lg-4">

                        ${createResultCard(

                            student,

                            result

                        )}

                    </div>

                `;

            }

        );



        // Final Statistics
        statisticsOutput.innerHTML = `


            <div class="card">

                <div class="card-body">


                    <h4>

                        Final Statistics

                    </h4>


                    <p>

                        Total Students:

                        ${resultStudents.length}

                    </p>


                    <p class="status-pass">

                        Passed Students:

                        ${passedStudents}

                    </p>


                    <p class="status-fail">

                        Failed Students:

                        ${failedStudents}

                    </p>


                </div>

            </div>

        `;

    }



    catch (error) {


        allResultsOutput.innerHTML = `

            <p class="error-text">

                Error: ${error}

            </p>

        `;

    }

}



// Load All Button
document.getElementById(

    "loadAllBtn"

).addEventListener(

    "click",

    loadAllResults

);