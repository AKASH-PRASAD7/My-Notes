# My Notes App :notebook:

Welcome to My Notes App! This is a simple and intuitive web application that allows you to create, manage, and organize your personal notes. The app is built using the MERN stack, which consists of MongoDB, Express.js, React, and Node.js. It utilizes bcrypt for password hashing, JWT token-based authentication and authorization, and cookies for session management, and middleware for additional security and functionality.

<img width="960" alt="12" src="https://github.com/AKASH-PRASAD7/My-Notes/assets/110546856/192a06cd-6b39-4724-8c83-90082aabd5fb">


## Getting Started :rocket:

To run the My Notes App locally on your machine, follow these steps:

### Prerequisites

1. Node.js: Make sure you have Node.js installed on your system. You can download it from the official website: [Node.js](https://nodejs.org/).

2. MongoDB: Install MongoDB and make sure it's running on your local machine or provide the connection details in the `.env` file.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AKASH-PRASAD7/My-Notes.git
cd My-Notes
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following configuration:

```plaintext
MONGO_URI=<YOUR CONNECION URI>
PORT=8001
SECRET_KEY=<JWT_SECRET_KEY>
```

Make sure to replace `<YOUR CONNECION URI>`with your actual MongoDB connection string.

### Running the App

Start the development server:

```bash
npm start
```

The app will be accessible at `http://localhost:8001`.

## Features :star:

- User Authentication: Sign up and sign in securely using bcrypt-hashed passwords and JWT tokens.
- Authorization & Cookies: Maintain user sessions using HTTP-only secure cookies for authentication.
- Create Notes: Add new notes with a title and description.
- Middleware: Implement additional security and functionality using custom middleware.
- View All Notes: See all your notes in a user-friendly list.
- Edit Notes: Modify and update existing notes.
- Delete Notes: Remove unwanted notes from the list.

## Folder Structure :file_folder:

The project follows a structured folder organization:

```
my-notes-app/
  ├── client/
  │   ├── public/
  │   └── src/
  │       ├── components/
  │       ├── containers/
  │       ├── pages/
  │       ├── App.js
  │       ├── index.js
  │       └── ...
  ├── server/
  │   ├── controllers/
  │   ├── middleware/
  │   ├── models/
  │   ├── routes/
  │   ├── app.js
  │   └── ...
  ├── .env
  ├── package.json
  └── README.md
```

- The `client` folder contains the React front-end code, while the `server` folder holds the Node.js back-end code.

## Technologies Used :computer:

- Front-End:

  - React.js
  - React Router
  - Tailwind css
  - Axios

- Back-End:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - bcrypt (for password hashing)
  - jsonwebtoken (JWT) (for token-based authentication)

## APIs :link:

The My Notes App provides the following API endpoints:

### Authentication Routes :closed_lock_with_key:

- `POST /auth/signup`: Create a new user account.
- `POST /auth/signin`: Sign in to an existing account.
- `POST /auth/signout`: Sign out from the current user account.

### Notes Routes :notebook:

- `GET /notes`: Get all user notes.
- `POST /notes`: Add a new note.
- `PATCH /notes/:notesId`: Update a note.
- `DELETE /notes/:notesId`: Delete a note.

## Middleware :gear:

The My Notes App utilizes custom middleware for additional security and functionality:

- `verifyCookie`: Verifies the JWT token present in the session cookie for user authentication.

## Contributing :handshake:

We welcome contributions from the community to enhance the app and make it even better. If you find any issues or have suggestions for new features, feel free to open an issue or submit a pull request.

## License :scroll:

This project is licensed under the Creatives Common.
