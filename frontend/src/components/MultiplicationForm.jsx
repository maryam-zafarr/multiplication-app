import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Card, CardBody, Alert, Form } from "@heroui/react";

// API URL for multiplication operations
const API_URL = `http://127.0.0.1:8001/api/multiplications/`;

// Multiplication Form
const MultiplicationForm = ({ onNewResult }) => {

  // State variables to store user input, result, error messages, and alert visibility
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Validates user input
  // Returns true if inputs are valid, otherwise false
  const validateInputs = () => {
    if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
      setError("Both inputs must be valid numbers.");
      return false;
    }
    return true;
  };

  // Computes the multiplication result
  const computeMultiplication = () => {
    return parseInt(num1) * parseInt(num2);
  };

  // Sends multiplication result to backend
  const saveResultToBackend = async (multiplicationResult) => {
    try {
      const response = await axios.post(API_URL, {
        number1: parseInt(num1),
        number2: parseInt(num2),
        result: multiplicationResult,
      });
      onNewResult(response.data);
      setShowAlert(true);
    } catch (err) {
      setError("Failed to store the result.");
      console.error(err);
    }
  };

  // Handles multiplication and API request on form submission
  const handleMultiply = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setShowAlert(false);

    if (!validateInputs()) return;

    const multiplicationResult = computeMultiplication();
    setResult(multiplicationResult);
    await saveResultToBackend(multiplicationResult);
  };

  return (
    <>
      {/* Alert notification for successful save */}
      {showAlert && (
        <Alert color="success" variant="faded" className="absolute top-4 z-50 m-8 w-100">
          The result has been successfully saved in the database.
        </Alert>
      )}

      {/* Display error message if any */}
      {error && 
        <Alert color="danger" variant="faded" className="absolute top-4 right-4 z-50 m-8 w-100">
          {error}
        </Alert>
      }

      {/* Multiplication Form */}
      <Card className="w-full max-w-md h-[420px] shadow-lg p-10">
        <h1 className="text-2xl font-semibold text-center">Multiplication App</h1>
        
        <CardBody>
          <Form className="w-full max-w-xs" validationBehavior="native" onSubmit={handleMultiply}>
            {/* Input Fields for numbers */}
            <Input
              isRequired
              type="number"
              label="First Number"
              placeholder="Enter the first number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full mb-2"
            />
            <Input
              isRequired
              type="number"
              label="Second Number"
              placeholder="Enter the second number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full mb-2"
            />

            {/* Multiply Button */}
            <Button color="secondary" type="submit" className="w-full mb-4">
              Multiply & Save
            </Button>

            {/* Display multiplication result */}
            <Input
              readOnly
              value={result !== null ? result : ""}
              label="Result"
              className="w-full"
            />
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default MultiplicationForm;
