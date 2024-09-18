import { Box } from "@chakra-ui/react"
import {Route, Routes} from "react-router-dom"

import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from "./components/Navbar";

function App() {

  return (
    <Box minH ={"100vh"}>
    <Navbar/>  {/*we put navbar  above routes because no matter what page you go to, it will ALWAYS be available on the page*/}
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<CreatePage/>} />
      </Routes>     
      </Box>

  )
}

export default App
