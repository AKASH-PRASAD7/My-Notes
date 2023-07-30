import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import getCookie from "../utils/getCookie";
import Navabar from "../components/Navabar";
import NoteCardContainer from "../components/NoteCardContainer";
import { useSelector } from "react-redux";

const Home = () => {
  // const navigate = useNavigate();
  //state
  const userData = useSelector((globalstate) => globalstate.user);

  return (
    <>
      <Navabar />
      <NoteCardContainer />
    </>
  );
};

export default Home;
