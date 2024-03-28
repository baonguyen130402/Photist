import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Art,
  Discover,
  GetPro,
  Home,
  Join,
  Landscape,
  Login,
  Portrait,
  Sport,
} from "../pages/";

export default function() {
  const Layout = () => {
    return (
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    );
  };

  const BrowserRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/discover/sport" element={<Sport />} />
          <Route path="/discover/art" element={<Art />} />
          <Route path="/discover/portrait" element={<Portrait />} />
          <Route path="/discover/landscape" element={<Landscape />} />
          <Route path="/getpro" element={<GetPro />} />
        </Routes>
      </Router>
    );
  };

  return (
    BrowserRoutes()
  );
}
