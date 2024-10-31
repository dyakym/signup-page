import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import ConnectShopify from './components/ConnectShopify/ConnectShopify';
import ConnectCustomerEmail from './components/ConnectCustomerEmail/ConnectCustomerEmail';
import SuccessShopify from './components/SuccessShopify/SuccessShopify';
import NoShopify from './components/NoShopify/NoShopify';
import NoEmail from './components/NoEmail/NoEmail';
import SuccessPage from './components/SuccessPage/SuccessPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connect-shopify" element={<ConnectShopify />} />
          <Route path="/success-shopify" element={<SuccessShopify />} />
          <Route path="/no-shopify" element={<NoShopify />} />
          <Route path="/connect-email" element={<ConnectCustomerEmail />} />
          <Route path="/no-email" element={<NoEmail />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
