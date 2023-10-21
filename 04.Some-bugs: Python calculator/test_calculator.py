import unittest
from io import StringIO
import sys

# Assuming the original program is saved as `calculator.py`
import calculator

class TestCalculatorFunctions(unittest.TestCase):

    def setUp(self):
        self.held_output = StringIO()
        sys.stdout = self.held_output

    def tearDown(self):
        self.held_output.close()
        sys.stdout = sys.__stdout__

    # ... [previous tests]

    def test_grammatically_correct_output(self):
        # For addition
        sys.stdin = StringIO("5\n3\nadd\n")
        calculator.main()
        self.assertIn("The result of adding 5.0 and 3.0 is:", self.held_output.getvalue())

        # Resetting output
        self.held_output.truncate(0)
        self.held_output.seek(0)

        # For subtraction
        sys.stdin = StringIO("5\n3\nsubtract\n")
        calculator.main()
        self.assertIn("The result of subtracting 5.0 and 3.0 is:", self.held_output.getvalue())

        # Further tests for multiplication and division can be added similarly

    def test_invalid_input_type(self):
        # Using a non-numeric value for the first number
        sys.stdin = StringIO("invalid\n5\nadd\n")
        calculator.main()
        self.assertIn("Invalid input!", self.held_output.getvalue())  # Assuming you add a message "Invalid input!" in the main program for handling non-numeric inputs.

        # Resetting output
        self.held_output.truncate(0)
        self.held_output.seek(0)

        # Using a non-numeric value for the operation can be tested similarly

    # ... [further tests]

if __name__ == '__main__':
    unittest.main()
