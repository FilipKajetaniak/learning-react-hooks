import React from "react";
import "../css/App.scss";
import AdminContainer from '../containers/AdminContainer';
import GridControl from '../components/admin/GridControl';

import Grid from "./admin/Grid";

export default function App() {
  return (
    <div className="App">
      <AdminContainer>
        <GridControl />
        <Grid />
      </AdminContainer>
    </div>
  );
}
