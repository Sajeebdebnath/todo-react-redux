import Navbar from "./components/Navbar";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./redux/store"


function App() {
  return (
    <Provider store={store}>
      <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
           <Navbar />
            

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <TodoHeader />
                
                <hr className="mt-4" />

                <TodoList />

                <hr className="mt-4" />


                <TodoFooter />
            </div>
        </div>
    </Provider>
  );
}

export default App;
