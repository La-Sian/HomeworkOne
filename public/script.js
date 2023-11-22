function calculateSum() {
    // Get the values from the input fields
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
  
    // Get the result element where the sum will be displayed
    const resultElement = document.getElementById('result');
  
    // Check if both inputs are numeric
    if (!isNaN(num1) && !isNaN(num2)) {
      // If both inputs are numeric, calculate the sum
      const sum = parseFloat(num1) + parseFloat(num2);
      
      // Display the result in the result element
      resultElement.textContent = `Result: ${sum}`;
    } else {
      // If any of the inputs is not numeric, display an error message
      resultElement.textContent = 'Please enter valid numeric values.';
    }
}
