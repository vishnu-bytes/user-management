import React, { Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./presenation/Common/Routes";

const Users = React.lazy(() => import("./presenation/Users"));

function App() {
  return (
    <div className="App">
      {/* <h1>skdjfksjdhf</h1> */}
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path={routes.USERS} element={<Users />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
