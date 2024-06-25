import React, { Component } from "react";
import { Grid } from "@mui/material";

// components
import { UIAppbar, UICard } from "../../components";

// utils
import { Constants } from "../../utils";

const DashboardPage = () => {
  return (
    <div>
      <UIAppbar />

      <Grid container spacing={2}>
        {Constants.adminDashboardCardTitles.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <UICard title={item} description="Sample description" />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default DashboardPage;
