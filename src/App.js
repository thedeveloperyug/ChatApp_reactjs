import {  Routes, Route, BrowserRouter} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ChatSystem from './Pages/ChatSystem';
import { useContext } from 'react';
import { AuthContext} from './context/AuthContext';
import  {Navigate} from 'react-router-dom'
function App() {
    const {currentUser} = useContext(AuthContext)
    // console.log(currentUser);
//  const currentUser = useAuth();
    // console.log(currentUser.email);
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }
        return children;
    }
    return (
        <>
        <BrowserRouter>
                {/* <Navigation /> */}
                <Routes>
                    <Route exact path="/" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/chatsys" element={
                        <ProtectedRoute>
                            <ChatSystem />
                        </ProtectedRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default App;