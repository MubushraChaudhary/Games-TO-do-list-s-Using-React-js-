// import React from "react";
// import "./game.css";

// const Form = () => {
//   return (
//     <div className="main">
//       <form>
//       <button type="submit">TIC TAC TOE</button>
//       <button type="button">HANG MAN</button>
//       </form>
//     </div>

//   );
// };

// export default Form;

import React from "react";
import { Link } from "react-router-dom";
import "./game.css";

const Form = () => {
  return (
    <div className="main">
      <form>
        <Link to="http://localhost:5174/tictactoe">
          <button type="button">TIC TAC TOE</button>
        </Link>
        <Link to="http://localhost:5174/hangman">
          <button type="button">HANG MAN</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
