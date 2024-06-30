import Add from "./components/Add";
import Greetings from "./components/Greetings";

function App() {
  return (
    // <section>
    //   <Add />
    //   <Greetings />
    // </section>

    //instead of wrapping in section we can do this
    // this is called fragments
    <>  
      <Add />
      <Greetings />
    </>
  );
}

export default App;
