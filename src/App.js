import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Actions from "./components/Actions";
import Form from "./components/Form";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import About from './routes/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <TodoProvider>
          <div className="container">
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
        </TodoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;