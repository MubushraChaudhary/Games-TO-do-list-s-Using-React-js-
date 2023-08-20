// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Signuppage from "./components/signuppage";
// import Login from "./components/login";
// import Gamepage from "./components/gamepage";
// import Tictactoe from "./components/tictactoe";
// import Hangman from "./components/hangman";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Signuppage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/game" element={<Gamepage />} />
//         <Route path="/tictactoe" element={<Tictactoe />} />
//         <Route path="/hangman" element={<Hangman />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import Hangman from "./components/hangman";
// import Tictactoe from "./components/tictactoe";
// import Login from "./components/login";
// import Signuppage from "./components/signuppage";
// import Gamepage from "./components/gamepage";

// const App = () => {
//   return (
//     <>
//       {/* <Signuppage />  */}
//       {/* <Login />  */}
//       {/* <Gamepage />  */}
//       {/* <Tictactoe />  */}
//       {/* <Hangman/>  */}
//     </>
//   );
// };
// export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Signuppage from "./components/signuppage";
// import Login from "./components/login";
// import Gamepage from "./components/gamepage";
// import Tictactoe from "./components/tictactoe";
// import Hangman from "./components/hangman";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Sign Up</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/game">Game</Link>
//           </li>
//           <li>
//             <Link to="/tictactoe">Tic Tac Toe</Link>
//           </li>
//           <li>
//             <Link to="/hangman">Hangman</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route exact path="/" element={<Signuppage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/game" element={<Gamepage />} />
//         <Route path="/tictactoe" element={<Tictactoe />} />
//         <Route path="/hangman" element={<Hangman />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Signuppage from "./components/signuppage";
import Login from "./components/login";
import Gamepage from "./components/gamepage";
import Tictactoe from "./components/tictactoe";
import Hangman from "./components/hangman";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/tictactoe">Tic Tac Toe</Link>
          </li>
          <li>
            <Link to="/hangman">Hangman</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Signuppage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Gamepage />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
        <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
