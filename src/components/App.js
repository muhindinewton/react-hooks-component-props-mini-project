import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Overreacted" />
      <About
        image="https://placehold.co/300"
        about={
          <>
            Personal blog by Dan Abrahamov. <br />I explain with words and code.
          </>
        }
      />
      <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;