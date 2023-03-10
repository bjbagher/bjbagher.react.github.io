import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import posts from "../data";

function Blog() {
  return (
    <main>
      <NavBar />
      <section className="blog">
        <div className="blog_title">
          <h1>Blog</h1>
        </div>
        <ul>
          <div className="rows">
            {posts.map((post, idx) => {
              return (
                <li key={idx}>
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
                    <Link to={`${idx}`}>{post.title}</Link>
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
