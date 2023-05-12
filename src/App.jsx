import DialogBox from "./Components/Dialog/DialogBox";
import Home from "./Home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Home />
            <Outlet />
          </>
        }
      >
        <Route path="/details" element={<DialogBox />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
