import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Main';
import List from './components/List';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="/pokemon/:id" element={<View />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
