import "./App.css";
import ContextProvider from "./contexts/ContextProvider";
import Main from "./router/Main";

function App() {
  return (
    <div>
      <ContextProvider>
      <Main />
      </ContextProvider>
    </div>
  );
};

export default App;
