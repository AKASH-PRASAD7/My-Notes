# Server DOCS (https://documenter.getpostman.com/view/23950566/2s9XxsVGHQ)

## Welcome to My Notes-App Server! :

This Node.js server provides various API endpoints to manage user authentication and notes.

### Getting Started

To get started, make sure you have Node.js and MongoDB installed on your system. Clone this repository and install the required dependencies by running:

```bash
npm install
```

Next, create a `.env` file in the root directory and configure the required environment variables. You can use the `.env.example` file as a template.

### Running the Server

To start the server, use the following command:

```bash
npm start
```

The server will be running on `http://localhost:8001` by default or the port specified in the `.env` file.

### API Endpoints

#### Authentication Routes :closed_lock_with_key:

##### Sign Up - `POST /auth/signup`

Create a new user account by providing the required credentials in the request body.

**Request Body:**

```json
{
  "credentials": {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
}
```

**Response:**

- Status: 201 Created
- JSON Object:
  ```json
  {
    "success": true,
    "token": "jsonwebtoken"
  }
  ```

##### Sign In - `POST /auth/signin`

Sign in to an existing account by providing the registered email and password in the request body.

**Request Body:**

```json
{
  "credentials": {
    "email": "johndoe@example.com",
    "password": "password123"
  }
}
```

**Response:**

- Status: 200 OK
- JSON Object:
  ```json
  {
    "success": true,
    "token": "jsonwebtoken"
  }
  ```

##### Sign Out - `POST /auth/signout`

Sign out from the current user account. Requires an active JSON Web Token (JWT) cookie.

**Response:**

- Status: 200 OK
- JSON Object:
  ```json
  {
    "success": true,
    "message": "Signout successfully"
  }
  ```

#### User Routes :busts_in_silhouette:

##### Get All Users - `GET /user`

Retrieve a list of all users.

**Response:**

- Status: 200 OK
- JSON Object:
  ```json
  {
    "success": true,
    "users": [
      {
        "_id": "user_id_1",
        "name": "John Doe",
        "email": "johndoe@example.com"
      },
      {
        "_id": "user_id_2",
        "name": "Jane Smith",
        "email": "janesmith@example.com"
      }
      // ...
    ]
  }
  ```

##### Get User by ID - `GET /user/:id`

Retrieve a user's details by providing their ID in the request URL.

**Response:**

- Status: 200 OK
- JSON Object:
  ```json
  {
    "success": true,
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
  }
  ```

#### Notes Routes :notebook_with_decorative_cover:

##### Add New Note - `POST /notes`

Add a new note by providing note details in the request body. Requires an active JSON Web Token (JWT) cookie.

**Request Body:**

```json
{
  "tittle": "My Note",
  "type": "Personal",
  "description": "This is my first note."
}
```

**Response:**

- Status: 200 OK
- JSON Object:
  ```json
  {
    "success": true,
    "notes": {
      "_id": "note_id",
      "tittle": "My Note",
      "type": "Personal",
      "description": "This is my first note."
    }
  }
  ```

##### Get All User Notes - `GET /notes`

Retrieve all notes belonging to the current user. Requires an active JSON Web Token (JWT) cookie.

**Response:**

- Status: 200 OK
- JSON Object:
  ```json
  {
    "success": true,
    "allNotes": [
      {
        "_id": "note_id_1",
        "tittle": "My Note 1",
        "type": "Personal",
        "description": "This is my first note."
      },
      {
        "_id": "note_id_2",
        "tittle": "My Note 2",
        "type": "Work",
        "description": "This is my second note."
      }
      // ...
    ]
  }
  ```

##### Update Note - `PATCH /notes/:notesId`

Update an existing note by providing the note ID in the request URL and note details in the request body. Requires an active JSON Web Token (JWT) cookie.

**Request Body:**

```json
{
  "tittle": "Updated Note",
  "type": "Work",
  "description": "This note has been updated."
}
```

**Response:**

- Status: 200 OK
- JSON Object:
  ```json
  {
    "success": true,
    "updateNote": {
      "_id": "note_id",
      "tittle": "Updated Note",
      "type": "Work",
      "description": "This note has been updated."
    }
  }
  ```

##### Delete Note - `DELETE /notes/:notesId`

Delete a note by providing the note ID in the request URL. Requires an active JSON Web Token (JWT) cookie.

**Response:**

- Status: 200 OK
- JSON Object:
  ```json
  {
    "success": true,
    "deleteNote": {
      "_id": "note_id",
      "tittle": "My Note",
      "type": "Personal",
      "description": "This is my first note."
    }
  }
  ```

### Error Handling

The server handles various errors gracefully and returns appropriate error messages and status codes. In case of any unexpected behavior or issues, the server will respond with helpful error information.

### Feedback and Contribution

We welcome any feedback or contributions to make this server even better. Feel free to create an issue or submit a pull request.
