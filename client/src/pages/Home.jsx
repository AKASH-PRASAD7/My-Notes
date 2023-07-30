import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getCookie from "../utils/getCookie";
import Navabar from "../components/Navabar";
import NoteCardContainer from "../components/NoteCardContainer";
import { useSelector } from "react-redux";

const Home = () => {
  //cookie
  const [cookie, setCookie] = useState();
  setCookie(getCookie("jwtToken"));
  const navigate = useNavigate();
  //state
  const userName = useSelector((globalstate) => globalstate.user.data);

  // useLayoutEffect(() => {
  //   if (!cookie) {
  //     navigate("/");
  //   }
  //   // eslint-disable-next-line
  // }, [userName, cookie]);
  return (
    <>
      <Navabar />
      <NoteCardContainer name={userName} />
    </>
  );
};

export default Home;
