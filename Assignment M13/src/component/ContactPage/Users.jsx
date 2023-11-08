import React from "react";
import User from "./User";

function Users({ usersArr }) {
  return (
    <section className="">
      {usersArr.map((user, index) => {
        return <User key={index.toString()} index={index} user={user} />;
      })}
    </section>
  );
}

export default Users;