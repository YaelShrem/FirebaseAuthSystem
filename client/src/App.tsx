import Signup from "./auth/Signup"

import { AuthProvider } from "./auth/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./auth/Profile"
import LoginPage from "./auth/LoginPage"
import PrivateRoute from "./auth/PrivateRoute"
import ForgotPassword from "./auth/ForgotPassword"
import UpdateProfile from "./auth/UpdateProfile"
import PasswordReset from "./auth/PasswordReset"
import TermsPage from './auth/TermsPage';
function App() {
  return (
        <AuthProvider>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/Terms" element={<TermsPage/>}/>
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/password-reset" element={<PasswordReset />} />
            </Routes>
          </Router>
        </AuthProvider>
  )
}

export default App