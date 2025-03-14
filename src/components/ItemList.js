import React from "react";
import { Input, Button, Divider } from "antd";

// TODO: Implement a component that:
// 1. Has a state to track a list of items
// 2. Has an input field to add new items
// 3. Has a button to add items to the list
// 4. Displays the list of items

const ItemList = () => {
  // Your implementation here:

  const [userCars, setUserCars] = React.useState([
    "Ferrari",
    "G-wagon",
    "Toyota",
    "Lexus",
  ]);
  const [userNewCars, setUserNewCars] = React.useState("");

  // a function that allows user to add a car to the car list
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!userNewCars.trim().toLowerCase()) return;
    if (userNewCars.includes(userCars)) return;

    // set user cars to the new...user cars
    setUserCars([...userCars, userNewCars]);

    // clear the input field after adding a car to the list.
    setUserNewCars("");
  };

  return (
    <div>
      <h1>LIST ITEMS</h1>
      {/* map through the user cars and display them in a paragraph tag */}
      {userCars.map((eachItem, index) => {
        return <p key={index}>{eachItem}</p>;
      })}

      {/* form to add a new item */}
      <h3 className="text-black font-bold ">Add a new item</h3>
      <form onClick={handleAddItem}>
        <Input
          value={userCars}
          size="large"
          placeholder="Click to Add an item"
          onChange={(event) => setUserNewCars(event.target.value)}
        />

        <Button type="primary" size="large" block>
          Add your items
        </Button>

        {/* a divider to separate every car item*/}
        <Divider style={{ backgroundColor: "white", padding: "2rem" }} />
      </form>
    </div>
  );
};

export default ItemList;
