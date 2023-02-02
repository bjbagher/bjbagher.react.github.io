import NavBar from "../components/NavBar";
import ReactMarkdown from "react-markdown";
import { Fragment } from "react";

const posts = [
  {
    date: "Jan 12, 2023",
    title: "Run Prettier on Github Actions",
  },
  {
    date: "Jan 8, 2023",
    title: "Error: getaddrinfo ENOTFOUND localhost",
  },
];

function Blog() {
  return (
    <main>
      <NavBar />
      <section className="blog">
        <h1>Blog</h1>
        <ul>
          <div className="rows">
            {posts.map((post, idx) => {
              return (
                <li>
                  <div>
                    <time>
                      {new Date(post.date).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div>
                    <a href={"blog/" + idx}>{post.title}</a>
                  </div>
                </li>
              );
            })}
          </div>
          <br />
        </ul>
      </section>
    </main>
  );
}

export default Blog;
