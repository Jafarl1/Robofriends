import React, { useState, useEffect } from "react";
import "./style.css";
import CardList from "./Components/CardList";
import Searchbox from "./Components/Searchbox";
import { ThreeDots } from "react-loader-spinner";

function App() {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobtos] = useState();

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRobots(data);
      } catch (error) {
        console.error("Error fetching robots =>", error);
      }
    };
    fetchRobots();
  }, []);

  const searchChange = (event) => {
    const filtered = robots.filter((robot) =>
      robot.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredRobtos(filtered);
  };

  return (
    <>
      <header>
        <h1>RoboFriends</h1>
      </header>
      <Searchbox searchChange={searchChange} />
      {robots.length > 0 ? (
        <CardList robots={filteredRobots ? filteredRobots : robots} />
      ) : (
        <div className="no-data">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="rgb(71, 28, 91)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
      <footer>
        The app was created by
        <a href="https://github.com/Jafarl1" target="_blank" rel="noreferrer">
          ©️ Zohrab Jafarli
        </a> 
        in 2023.
      </footer>
    </>
  );
}

export default App;
