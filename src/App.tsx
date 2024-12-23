import "./App.css";

import HelmetSEO from "./comps/Utility/HelmetSEO";
import Layout from "./comps/Layout/Layout";
import Hero from "./comps/Intro(Section1)/Hero";
import AboutMe from "./comps/Intro(Section1)/AboutMe";
import ProjectDisplayShell from "./comps/Projects(Section2)/ProjectDisplayShell";
import PastExpShell from "./comps/Experience(Section3)/PastExpShell";
import InterestsShell from "./comps/Interests(Section4)/InterestsShell";
import ConnectShell from "./comps/Connect(Section5)/ConnectShell";

function App() {
  return (
    <>
      <HelmetSEO />
      <Layout>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AboutMe />
          <ProjectDisplayShell />
          <PastExpShell />
          <InterestsShell />
          <ConnectShell />
        </div>
      </Layout>
    </>
  );
}

export default App;
