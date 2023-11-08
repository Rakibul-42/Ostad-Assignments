import React, { useState } from "react";

function User({ user, index }) {
  const [show, setShow] = useState(false);
  const { fullName, email, number } = user;
  return (
    <>
      {show && (
        <article
          className="bg-dark p-3 text-light mb-3"
          style={{ maxWidth: "400px" }}
        >
          <h3>{fullName}</h3>

          <h4>{email}</h4>

          <h5>{number}</h5>
        </article>
      )}
      <abbr title={fullName}>
        <button onClick={() => setShow(!show)}>
          {" "}
          {index} : {show ? " Hide user" : "Show user"}{" "}
        </button>{" "}
      </abbr>
      <br />
    </>
  );
}

export default User;