let marks = parseInt(prompt("Enter the student's marks (between 0 and 100): "));
// Check if the input is valid
if (marks >= 0 && marks <= 100) {
  // Determine the grade based on the marks
  let grade;
  if (marks > 79) {
    grade = 'A';
  } else if (marks > 59) {
    grade = 'B';
  } else if (marks > 49) {
    grade = 'C';
  } else if (marks > 39) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  // Output the grade
  console.log(`The student's grade is ${grade}`);
} else {
  // Output an error message for invalid input
  console.log('Invalid input! Please enter a number between 0 and 100.');
}