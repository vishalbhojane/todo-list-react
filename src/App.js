import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from "react";
import Actions from "./components/Actions";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import About from './routes/About';
import TodoContext from "./context/TodoContext";

function App() {
  const {theme} = useContext(TodoContext)
  return (
    <>
      <BrowserRouter>
          <div className="container" data-theme={theme}>
            <div className="app-container">
              <Navbar />

              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Form />
                      <Actions />
                      <TodoList />
                    </>
                  }

                />

                <Route
                  path='/about'
                  element={
                    <>
                      <About />
                    </>
                  }
                />

              </Routes>
            </div>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;