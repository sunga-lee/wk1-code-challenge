// Prompt the user for the car's speed
let speed = parseInt(prompt("Enter the car's speed (in km/h): "));
// Check if the car is speeding
if (speed <= 70) {
  console.log('Ok'); // No demerit points
} else {
  // Calculate the number of demerit points
  let demeritPoints = Math.floor((speed - 70) / 5);
  // Output the number of demerit points
  console.log(`Points: ${demeritPoints}`);
  // Check if the driver's license should be suspended
  if (demeritPoints > 12) {
    console.log('License suspended');
  }
}