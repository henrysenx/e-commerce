import React from "react";
import { HomePageContainer } from "./HomePageStyles";
import Directory from "../../components/directory/directory";

const Homepage = () => {
  return (
    <HomePageContainer>
      <div className="directory-menu">
        <Directory />
      </div>
    </HomePageContainer>
  );
};

export default Homepage;
