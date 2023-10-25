function circularSum(sequence) {
  // Convert the sequence to a string to easily access individual digits
  const sequenceStr = sequence.toString();

  // Initialize the sum to 0
  let total = 0;

  // Iterate over the sequence
  for (let i = 0; i < sequenceStr.length; i++) {
    // Check if the current digit matches the next one (or the first one if it's the last digit)
    if (sequenceStr[i] === sequenceStr[(i + 1) % sequenceStr.length]) {
      total += parseInt(sequenceStr[i], 10);
    }
  }

  return total;
}

// Test cases
console.log(circularSum(1122)); // Expected output: 3
console.log(circularSum(1111)); // Expected output: 4
console.log(circularSum(1234)); // Expected output: 0
console.log(circularSum(91212129)); // Expected output: 9
