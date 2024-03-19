import React from "react";

const NotFound = () => {
  return (
    <div className="notFound">
      <div>
        <h1 className="fourZeroFour">404</h1>
      </div>
      <div className="line2"></div>
      <div>
        <h2 className="pageNot">Page Not Found !</h2>
        <p className="backHome">
          Go back to the{" "}
          <a href="/" className="backPage">
            Home
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
