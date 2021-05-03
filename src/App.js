import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./components/Login"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const onLoginHandler = (user) => {
    console.log(user);
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn", "1");
    setIsLoggedIn(false);
  };

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Switch>
        <Route exact path="/">
          {!isLoggedIn && (
            <Login onLogin={onLoginHandler} loggedIn={isLoggedIn} />
          )}
        </Route>
        <Route path="/dashboard">
          {isLoggedIn && <Dashboard onLogoutHandler={logoutHandler} />}
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
