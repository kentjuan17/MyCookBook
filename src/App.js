import { Route, Routes, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import AddRecipePage from "./pages/AddRecipePage";
import "./styles/index.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { setRecipes } from "./redux/recipeSlice";
import { useDispatch } from "react-redux";
import * as database from "./database";

function App() {
  const { currentUser } = useContext(AuthContext);

  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // Verifies if there's user login
  const LoggedInUser = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  useEffect(() => {
    // IIFE
    (async () => {
      // Loads the recipes from Firestore
      const data = await database.load(currentUser.uid);
      dispatch(setRecipes(data));
      console.log("Loaded db:", data);
      // setIsLoading(false);
    })();
  }, [currentUser, dispatch]);

  return (
    <div className="App">
      <Header />

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
        <Route
          path="/add"
          element={
            <LoggedInUser>
              <AddRecipePage />
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
