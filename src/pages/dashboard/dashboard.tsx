import React, { Component } from "react";
import { Grid, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// components
import { UIAppbar } from "../../components";

// utils
import { Constants } from "../../utils";

// pages
import {
  AdminDashboardPage,
  StudentDashboardPage,
  TeacherDashboardPage,
} from "../index";

const DashboardPage = () => {
  return (
    <Container>
      <UIAppbar />

      <Routes>
        <Route path="/" element={<AdminDashboardPage />} />
        <Route path="/teachers" element={<TeacherDashboardPage />} />
        <Route path="/students" element={<StudentDashboardPage />} />
      </Routes>
    </Container>
  );
};

export default DashboardPage;
