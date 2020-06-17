import React from "react";
import { useSelector } from "react-redux";

const ErrorShow = ({ type }) => {
  let errors = useSelector((state) => state.errors[type]);

  if (type === "review" && errors.includes("User has already been taken")) {
    errors = [<li>You have already reviewed this listing!</li>];
  } else {
    errors = errors.map((error, idx) => <li key={idx}>{error}</li>);
  }
  // else if (type === "booking"){
  //   errors = errors.map
  // }
  let heading = null;

  if (type !== "session") {
    heading = (
      <h2>
        {errors.length
          ? `${type[0].toUpperCase() + type.slice(1).toLowerCase()} Error !!`
          : ""}
      </h2>
    );
  }

  return (
    <div className={`${type}-errors-container`}>
      {heading}
      <ul>{errors}</ul>
    </div>
  );
};

// const msp = (state) => ({
//     errors: state.errors
// });

// const mdp = (dispatch) => ({

// });

// export default connect(msp, mdp)(ErrorShow)
export default ErrorShow;
