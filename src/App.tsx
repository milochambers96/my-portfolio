import "./App.css";
import AboutMe from "./comps/Intro(Section1)/AboutMe";
// import ColorPaletteDisplay from "./comps/Intro(Section1)/ColourPaletterDisplay";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600">Hello</h1>
      <AboutMe />
      {/* <ColorPaletteDisplay /> */}
    </div>
  );
}

export default App;
