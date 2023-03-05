import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import React from "react";
import { Container, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <Paper elevation={0} sx={{ borderRadius: 0, background: `radial-gradient(55.77% 55.77% at 51.33% 55.77%, rgba(239, 128, 49, 0.41) 0%, rgba(255, 255, 255, 0.05) 100%)` }}>
            <Container >
                <Navbar />
                <Outlet />
                <Footer />
            </Container>
        </Paper>
    )
}

export default Index