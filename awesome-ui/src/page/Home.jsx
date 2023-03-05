import "../style/home.css";
import Header from "../component/home/Header";
import React from "react";
import Service from "../component/home/Service";
import { Stack } from "@mui/material";

const Home = () => {
    return (
        <Stack spacing={3}>
            <Header />
            <Service />
        </Stack>
    )
}

export default Home