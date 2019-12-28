import React from "react";
import logo from "./logo.svg";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import "./App.css";

function App() {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetails
          author={faker.name.firstName()}
          timeAgo='Today at 5PM!'
          textContent={faker.lorem.text()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
