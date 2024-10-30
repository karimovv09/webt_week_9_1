
const students = [
    { name: "David", mark: 80 },
    { name: "Vinoth", mark: 77 },
    { name: "Divya", mark: 88 },
    { name: "Ishitha", mark: 95 },
    { name: "Thomas", mark: 68 }
];

function displayGrades() {
    const tableBody = document.querySelector("#marksTable tbody");
    tableBody.innerHTML = '';  

    let totalMarks = 0;

    students.forEach(student => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const markCell = document.createElement("td");

        nameCell.textContent = student.name;
        markCell.textContent = student.mark;
        row.appendChild(nameCell);
        row.appendChild(markCell);

        tableBody.appendChild(row);
        totalMarks += student.mark;
    });

    const averageMark = totalMarks / students.length;
    document.getElementById("averageMark").innerText = averageMark.toFixed(2);

    let grade;
    if (averageMark >= 90) grade = 'A';
    else if (averageMark >= 80) grade = 'B';
    else if (averageMark >= 70) grade = 'C';
    else if (averageMark >= 60) grade = 'D';
    else grade = 'F';

    document.getElementById("finalGrade").innerText = grade;
}

document.getElementById("inputBox").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.getElementById("enterResult").innerText = "Enter key pressed!";
    }
});

document.getElementById("dblClickButton").addEventListener("dblclick", () => {
    document.getElementById("dblClickResult").innerText = "Button double-clicked!";
});

let progress = 0;
function updateProgress() {
    if (progress < 100) progress += 20;
    document.getElementById("progressBar").style.width = `${progress}%`;
}

function runFizzBuzz() {
    let result = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) result += "FizzBuzz ";
        else if (i % 3 === 0) result += "Fizz ";
        else if (i % 5 === 0) result += "Buzz ";
        else result += `${i} `;
    }
    document.getElementById("fizzBuzzResult").innerText = result;
}
