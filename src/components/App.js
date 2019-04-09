import React from "react";
import "../css/App.scss";
import AdminContainer from "../containers/AdminContainer";
import GridContainer from "../containers/GridContainer";

import Grid from "./admin/Grid";

export default function App() {
  return (
    <div className="App">
      <AdminContainer>
        <GridContainer>
          <Grid />
        </GridContainer>
      </AdminContainer>
    </div>
  );
}
