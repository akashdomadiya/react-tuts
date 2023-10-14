import React from "react";

export default function ChildComponentB({ sharedState, alert }) {
  // Exmaple 2
  //   const data = "Akash Domadiya";
  const data = { name: "Akash Domadiya", email: "Akash@gmail.com" };

  return (
    <div>
      <h3>Shared State: {sharedState}</h3>

      <button onClick={() => alert(data)}>Click Me</button>
    </div>
  );
}
