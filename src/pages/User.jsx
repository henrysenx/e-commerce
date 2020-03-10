import React from "react";

const User = ({ match }) => {
  return (
    <div>
      <h2>{match.params.id}</h2>
    </div>
  );
};

export default User;
