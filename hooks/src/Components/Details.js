import React from "react";
import Person from "./Person";

function Details() {
  const persons = [
    {
      id: 1,
      name: "Charles",
      age: 21,
      skill: "React",
    },
    {
      id: 2,
      name: "Bruce",
      age: 20,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Wendy",
      age: 20,
      skill: "Vue",
    },
  ];

  // const personList = persons.map((person) => <Person person={person} />);
  return (
    <div>
        {persons.map((person) => <Person person={person} />)}
    </div>
  ) 
}

export default Details;
