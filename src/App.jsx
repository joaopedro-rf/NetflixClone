// App.jsx

import { BrowserRouter, Route } from "react-router-dom";
import Auth from "./Auth.jsx";
import Index from "./Index.jsx";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Auth />} />
      <Route path="/profiles" element={<Profile />} />
      <Route path="/index" element={<Index />} />
    </BrowserRouter>
  );
}

export default App;
