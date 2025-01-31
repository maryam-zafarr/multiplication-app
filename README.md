# Multiplication App

## Overview

The Multiplication App is a web application that allows users to input two numbers, multiply them, and store the result in a backend database. The stored results can be retrieved and displayed in a history list.

## Features

- Input form for entering numbers
- Form validation to prevent empty or invalid submissions
- Read-only result display
- API integration to store and retrieve results
- Display of calculation history
- Error handling and UI feedback

## Technologies Used

### Frontend

- React
- Tailwind CSS
- Axios

### Backend

- Django
- Django REST Framework (DRF)
- MySQL

## Installation

### Prerequisites

- Node.js & npm
- Python & pip
- MySQL Database

### Backend Setup

```sh
# Clone the repository
$ git clone https://github.com/maryam-zafarr/multiplication-app.git
$ cd webapp/backend

# Create virtual environment & install dependencies
$ python -m venv venv
$ source venv/bin/activate  # On Windows use `venv\Scripts\activate`
$ pip install -r requirements.txt

# Setup environment variables
$ cp .env.example .env
# Update .env file with MySQL database credentials

# Apply migrations and start the server
$ python manage.py migrate
$ python manage.py runserver
```

### Frontend Setup

```sh
$ cd webapp/frontend

# Install dependencies
$ npm install

# Start the frontend
$ npm run dev
```

## API Endpoints

| Method | Endpoint                | Description                             |
| ------ | ----------------------- | --------------------------------------- |
| `GET`  | `/api/multiplications/` | Fetch all multiplication results        |
| `POST` | `/api/multiplications/` | Perform multiplication and store result |

### Example Request

```json
{
  "number1": 5,
  "number2": 3
}
```

### Example Response

```json
{
  "id": 1,
  "number1": 5,
  "number2": 3,
  "result": 15,
  "created_at": "2024-01-31T12:00:00Z"
}
```

## Running Tests

### Backend Tests

```sh
$ cd webapp/backend
$ python manage.py test
```

## Future Improvements

- User authentication to associate calculations with specific users.
- UI enhancements for a better user experience.

## License

This project is licensed under the MIT License.

---

**Thank you for reviewing my submission!**

