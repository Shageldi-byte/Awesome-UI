import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
import ServiceItem from "./ServiceItem";
import Ship from "../Icon/Ship";
import SmartCar from "../Icon/SmartCar";
import { Grid, Stack, Typography } from "@mui/material";
import { Fonts } from "../../core/theme";
import { AppButton } from "../AppComponent";

const listOfServices = [
    {
        title: "Car Rental",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis vitae ",
        icon: <SmartCar />
    },
    {
        title: "Boat Cruise",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis vitae ",
        icon: <Ship />
    }
]

const Service = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Stack spacing={2} sx={{ width: '80%' }}>
                    <Typography sx={{
                        fontFamily: Fonts.MEDIUM,
                        color: '#F3B562',
                        fontSize: '24px'
                    }}>MOT consectet</Typography>
                    <Typography sx={{
                        fontFamily: Fonts.MEDIUM,
                        color: 'primary.main',
                        fontSize: '36px'
                    }}>Amet,consectet</Typography>
                    <Typography sx={{
                        fontFamily: Fonts.REGULAR,
                        color: 'grey.800',
                        fontSize: '14px'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis vitae nullam aliquet dignissim quis. Vel, faucibus ac justo aliquam donec enim, commodo fermentum vitae. Et velit sceleris
                    </Typography>

                    <AppButton sx={{ width: '60%' }} endIcon={<ArrowRightAltIcon />}>GET STARTED</AppButton>

                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Grid container>
                    {
                        listOfServices.map((service, index) => {
                            return (
                                <Grid key={`service-${index}`} item xs={6}>
                                    <ServiceItem item={service} />
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Service