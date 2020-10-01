import React, { useState, useContext } from "react";
import { userContext } from "../Utils/userContext";
import { useGet } from "../Utils/Api";
import Button from "../Components/Button";

const Table = () => {
  const [url] = useState("https://randomuser.me/api/?results=20");
  const { sortFunction } = useGet(url);
  const { userDisplay } = useContext(userContext);
  return (
    <div>
      <table>
        <thread>
          <td onClick={() => sortFunction("name")}>
            <Button>Name</Button>
          </td>

          <td onClick={() => sortFunction("username")}>
            <Button>Username</Button>
          </td>
          <td onClick={() => sortFunction("email")}>
            <Button>Email</Button>
          </td>
        </thread>
      </table>
    </div>
  );
};

export default Table;
