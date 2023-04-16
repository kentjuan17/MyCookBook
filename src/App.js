import { Route, Routes, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AddRecipePage from "./pages/AddRecipePage";
import "./styles/index.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import RecipePage from "./pages/RecipePage";
import RecipeListPage from "./pages/RecipeListPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const { currentUser } = useContext(AuthContext);

  // Verifies if there's user login
  const LoggedInUser = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className="App">
      <Routes>
        <Route
          index
          path="/"
          element={
            <LoggedInUser>
              <HomePage />
            </LoggedInUser>
          }
        />

        <Route path="/recipes" element={<RecipeListPage />} />
        <Route
          path="/recipes/add"
          element={
            <LoggedInUser>
              <AddRecipePage />
            </LoggedInUser>
          }
        />
        <Route path="/recipes/:id" element={<RecipePage />} />

        <Route
          path="/profile"
          element={
            <LoggedInUser>
              <ProfilePage />
            </LoggedInUser>
          }
        />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
