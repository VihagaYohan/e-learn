import React, { Component } from "react";
import { Grid, Container } from "@mui/material";

// components
import { UIAppbar, UICard, UIPieChart, UITable } from "../../components";

// utils
import { Constants } from "../../utils";

const AdminDashboardPage = () => {
  return (
    <Container>
      <UIAppbar />

      <Grid container spacing={2}>
        {Constants.adminDashboardCardTitles.map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={`admin-dashboard-card-title-${item}`}
            >
              <UICard title={item} description="Sample description" />
            </Grid>
          );
        })}

        <Grid item xs={12} md={7}>
          <UITable />
        </Grid>

        <Grid item xs={12} md={5}>
          <UIPieChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboardPage;
