import React, { useState } from "react";

export const Titulos = ({ todos }) => {
  //   const data = [1, 2, 3, 4, 5, 6, 7, 8];
  //   const result = data.filter((_, index) => index < 3);
  //   console.log(result);
  return (
    <div>
      {todos.slice(0, 10).map((elemento) => (
        <p key={elemento.id}>
          {" "}
          {elemento.id} {") "}
          {elemento.title} {elemento.completed ? "✅" : "❌"}
        </p>
      ))}
    </div>
  );
};
