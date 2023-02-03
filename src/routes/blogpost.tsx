import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import posts from "./data.json"



function BlogPost() {
  const [md, setMd] = useState<string>("");
  let location = useLocation();


  const post = posts[+location.pathname.slice(-1)]
  const src = post.mdSrc
  
  useEffect(() => {
    import(src).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setMd(text));
    });
  }, []);

  return (
    <div>
       <NavBar />
      <img className="post_image" src={post.imgSrc} alt={post.altText} />
      <h2>{post.title}</h2>
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
