import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Please, click me!</Button>
      <Button>Submit!</Button>
      <Button>Change Color!</Button>
      <Button>Send some Information!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
