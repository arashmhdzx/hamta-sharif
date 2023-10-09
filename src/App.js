
import Login from './pages/login';
import PrivateRoute from './routes/privateRoute';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/auth/login" element={
                    <Login />
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Login />
                    </PrivateRoute>
                } />
                <Route path="*" element={
                    <PrivateRoute>
                        <Navigate to={"/dashboard"} />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
