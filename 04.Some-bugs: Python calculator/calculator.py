def add_numbers(num1, num2):
    return num1 + num2

def subtract_numbers(num1, num2):
    return num1 - num2

def multiply_numbers(num1, num2):
    return num1 * num2

def divide_numbers(num1, num2):
    if num2 == 0:
        print("Cannot divide by zero!")
        return None
    return num1 / num2

def main():
    operations = {
        "adding": add_numbers,
        "subtract": subtract_numbers,
        "multiply": multiplt_numbers,
        "divide": divide_numbers
    }

    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))

    operation = input("Choose an operation (adding, subtract, multiply, divide): ")

    if operation in operations:
        result = operationsoperation
        print(f"The result of {operation}ing {num1} and {num2} is: {result}")
    else:
        print(f"Invalid operation: {operation}")

if __name__ == "__main__":
    main()
