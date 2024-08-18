import React from "react";

const App = () => {
  return (
    <div>
        <div className="flex w-full justify-between">
          <div className="flex-1 bg-[pink] px-2">
            <h1>yh tailwind ki classes use kr ra ab</h1>
          </div>
          <div className="flex-1 bg-[blue] text-white px-2">
            <h1>tailwind is working</h1>
          </div>
        </div>
      <div className="main-div">
        <div>
          <h2 className="main-greetings">Hi there,</h2>
          <h1 className="main-name">
            My name is <span className="name">Muhammad Hashir</span>
          </h1>
          <h4 className="main-info">I am MERN stack web developer</h4>
        </div>
        <div className="img-div">
          <img src="/Picture.png" alt="Hashir" width={600} className="img" />
        </div>
      </div>
      <div className="projects-div">
        <h2 className="projects-heading">My Projects</h2>
        <div className="all-projects">
          <div className="book-div">
            <h3 className="book-heading">Book Store</h3>
            <img src="/book.png" alt="book" className="book-img" />
          </div>
          <div className="book-div">
            <h3 className="book-heading">Microsoft Clone</h3>
            <img src="/microsoft.jpg" alt="book" className="book-img" />
						
          </div>
          <div className="book-div">
            <h3 className="book-heading">Restaurant Website</h3>
            <img src="/restaurant.jpg" alt="book" className="book-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
