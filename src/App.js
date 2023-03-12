import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Sandeep Suman",
    location: "Bangalore, IN",
    tagline: "Developer",
    email: "me@sandeepsuman.dev",
    availability: "Open for consulting",
    brand:
      "",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
