import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";


const postMap = [
    {
        imgSrc: "/assets/astro-image.webp",
        altText: "astro logo",
        mdSrc: "../blog/first-post.md"
    },
    {
        imgSrc: "/assets/gh_actions.webp",
        altText: "gh actions",
        mdSrc: "../blog/second-post.md"
    }
]

function BlogPost() {
  const [md, setMd] = useState<string>("");
  let location = useLocation();

  const post = postMap[+location.pathname.slice(-1)]
  
  useEffect(() => {
    import(post.mdSrc).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setMd(text));
    });
  }, []);

  return (
    <div>
       <NavBar />
      <img className="post_image" src={post.imgSrc} alt={post.altText} />
      <ReactMarkdown children={md} />
    </div>
  );
}

export default BlogPost;
