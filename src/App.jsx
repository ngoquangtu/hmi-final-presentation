import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { NeedFindDing } from "./components/Projects/NeedFinding";
import { Projects } from "./components/Projects/Projects";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <NeedFindDing/>
      <Projects />
      <Contact />
      <ThankYou/>
    </div>
  );
}

export default App;
