import NavBar from "../components/NavBar";
import Avatar from "../components/Avatar";

function Root() {
  return (
      <main>
          <NavBar />
          <Avatar altTxt="astronaut cat" imgSrc="/assets/astro_cat.webp" />
          <h1>
            Hi, I'm <span className="text-gradient">Bahram</span>{" "}
            <span className="rotate">👋</span>
          </h1>
          <p className="intro">I'm a developer based in Fort Lauderdale, FL.</p>
          <p className="recruiter">
            Are you a recruiter? 👉{" "}
            <a href="https://bjbagher.github.io/recruiter">Schedule a call</a>
          </p>
      </main>
  );
}

export default Root;
