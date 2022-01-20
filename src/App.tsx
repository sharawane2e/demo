import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Form from "./components/Form";
import { Login } from "./components/Login";
import TableList from "./components/TableList";
import RequireAuth from "./RequireAuth";
import { Protected } from "./screens/Protected";
import { Public } from "./screens/Public";
import "./styles/app.scss";

function App() {
  let routeObject: RouteObject[] = [
    {
      path: "/",
      element: (
        <RequireAuth>
          <Protected />
        </RequireAuth>
      ),
      children: [
        {
          index: true,
          element: <Form />,
        },
        {
          path: "/tablelist",
          element: <TableList />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  let routes = useRoutes(routeObject);

  return <div className="appwarp">{routes}</div>;
}

export default App;
