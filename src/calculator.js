class Calculator {
    add(self, a, b) {
        return a + b;
    }

    subtract(self, a, b) {
        return a - b;
    }

    multiply(self, a, b) {
        return a * b;
    }

    divide(self, a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

if (require.main === module) {
    const calculator = new Calculator();
    console.log(`5 + 3 = ${calculator.add(5, 3)}`);
    console.log(`5 - 3 = ${calculator.subtract(5, 3)}`)
}