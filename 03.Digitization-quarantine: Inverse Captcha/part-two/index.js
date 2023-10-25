// can you itterate over the function with these changes?

// - `1212` produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
// - `1221` produces 0, because every comparison is between a 1 and a 2.
// - `123425` produces 4, because both 2s match each other, but no other digit has a match.
// - `123123` produces 12.
// - `12131415` produces 4.

function circularSum(sequence) {
  // Convert the sequence to a string to easily access individual digits
  const sequenceStr = sequence.toString();
  const length = sequenceStr.length;

  // Initialize the sum to 0
  let total = 0;

  // Iterate over the sequence
  for (let i = 0; i < length / 2; i++) {
    // Check if the current digit matches the digit that's halfway around the list
    if (sequenceStr[i] === sequenceStr[i + length / 2]) {
      total += 2 * parseInt(sequenceStr[i], 10); // Multiply by 2 because the match will be counted twice
    }
  }

  return total;
}

// Test cases
console.log(circularSum(1212)); // Expected output: 6
console.log(circularSum(1221)); // Expected output: 0
console.log(circularSum(123425)); // Expected output: 4
console.log(circularSum(123123)); // Expected output: 12
console.log(circularSum(12131415)); // Expected output: 4
