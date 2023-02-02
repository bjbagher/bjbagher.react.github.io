import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";


const postMap = [
    {
        imgSrc: "/assets/astro-image.webp",
        altText: "astro logo"
    },
    {
        imgSrc: "/assets/gh_actions.webp",
        altText: "gh actions"
    }
]

function BlogPost() {
  const [md, setMd] = useState<string>("");
  let location = useLocation();

  const post = postMap[+location.pathname.slice(-1)]
  console.log("post", post)
  
  useEffect(() => {
    import("../blog/first-post.md").then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setMd(text));
    });
  }, []);

  return (
    <div>
      <img className="post_image" src={post.imgSrc} alt={post.altText} />
      <ReactMarkdown children={md} />
    </div>
  );
}

export default BlogPost;
