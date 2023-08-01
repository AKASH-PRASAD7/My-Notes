import React from "react";
import Navabar from "../components/Navabar";

const about = () => {
  return (
    <>
      <Navabar />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-4">About My Notes App</h1>
          <p className="text-lg mb-2">
            Welcome to my Notes app! This app allows you to create, edit, and
            delete notes to help you stay organized and productive.
          </p>
          <p className="text-lg mb-2">
            It was built using the MERN stack, which stands for MongoDB,
            Express, React, and Node.js. The app uses RESTful APIs to
            communicate between the frontend and backend.
          </p>
          <p className="text-lg mb-2">
            Feel free to explore the app and start creating your own notes!
          </p>
          <p className="text-lg mb-2">Happy note-taking!</p>
        </div>
      </div>
    </>
  );
};

export default about;
