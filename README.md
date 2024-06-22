# Survey Form Application

This project is a survey form application built using React for the frontend and Node.js with Express for the backend. It allows users to fill out a survey based on selected topics and collects their responses.

## Features

-   **Dynamic Form Fields**: Users can select a survey topic (Technology, Health, Education) and fill out topic-specific questions.
-   **Form Validation**: Client-side validation ensures that required fields are filled and valid before submission.
-   **Additional Questions**: Depending on the selected survey topic, additional questions are dynamically loaded and displayed.
-   **Submission Summary**: After submission, a summary of entered data along with additional questions is displayed.

## Technologies Used

-   **Frontend**: React.js, Axios
-   **Backend**: Node.js, Express.js
-   **Styling**: Tailwind CSS
-   **Middleware**: CORS (for enabling cross-origin requests)
-   **Validation**: Custom form validation using React hooks
-   **Data Storage**: Data is stored temporarily in memory

## Setup Instructions

To run this project locally, follow these steps:

### Prerequisites

-   Node.js (v14 or later)
-   npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. **Clone the repository:**

```
git clone https://github.com/Trivarna13/survey-form-app.git
```

2. **Install dependencies:**

-   For the frontend (React):

```
cd frontend
npm install
```

-   For the backend (Node.js with Express):

```
cd backend
npm install
```

3. **Run the application:**

-   Start the backend server (in the `backend\src` directory):

```
node server.js
```

-   Start the frontend developmen server (in the `frontend` directory):

```
npm start
```

4. **Open the application:**

    Open `http://localhost:3000` to view it in your browser.

## Links:
- **Backend Hosted Link**: (https://survey-form-app-cqew.onrender.com/)[https://survey-form-app-cqew.onrender.com/]
- **Frontend Hosted Link**: (https://survey-form-app.vercel.app/)[https://survey-form-app.vercel.app/]


