import { Landing, Register, Dashboard, Error } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Jobify</h1> */}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
