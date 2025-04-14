// ArticleList.js
import React from "react";
import Article from "./Article"; // Assuming Article component exists

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article 
          key={post.id} // 👈 unique key required
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;