import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import {  useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import posts from "../data"



function BlogPost() {
  const [md, setMd] = useState<string>("");
  const { id } = useParams()


  const post = posts[+id!]
  
  useEffect(() => {
    post.mdSrc().then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setMd(text));
    });
  }, []);

  return (
    <div>
       <NavBar />
      <img className="post_image" src={post.imgSrc} alt={post.altText} />
      <div>
      <h1>{post.title}</h1>
      </div>
      <div className="post_date">
      <time>
      {new Date(post.date).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
        </time>
        </div>
      <ReactMarkdown children={md} />
    </div>
  );
}

export default BlogPost;
