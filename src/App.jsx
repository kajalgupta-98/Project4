import DialogBox from "./Components/Dialog/DialogBox";
import Home from "./Home/Home";
import { RecoilRoot } from "recoil";

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
        <Route path="/details/:id" element={<DialogBox />} />
      </Route>
    )
  );
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
