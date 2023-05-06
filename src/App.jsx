import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/global-style';
import { Subscription } from './pages/subscription/subscription';
import { MainScreen } from './pages/main-screen/MainScreen';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Subscription />} />
        <Route path='/main-screen' element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;