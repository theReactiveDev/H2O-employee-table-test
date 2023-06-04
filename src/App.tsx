import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import AppRouter from "./components/AppRouter/AppRouter";

import { SidebarLinksConstant } from "./shared/constants/sidebarLinks";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar links={SidebarLinksConstant} />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
