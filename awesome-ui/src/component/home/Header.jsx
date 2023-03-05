import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Hero from "../Icon/Hero";
import React, { useContext } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { AppContext } from "../../App";
import { Fonts } from "../../core/theme";
import { AppButton } from "../AppComponent";

const Header = () => {
    const { mobile } = useContext(AppContext);
    return (
        <Grid container alignItems={'center'}>
            <Grid item xs={7}>
                <Stack alignItems={mobile ? 'flex-start' : 'center'} sx={{ width: '80%' }}>
                    <Stack spacing={3} sx={{ width: '80%' }}>
                        <Typography sx={{
                            fontFamily: Fonts.MEDIUM,
                            color: 'grey.900',
                            fontSize: '2.2rem'
                        }}>Lorem ipsum dolor sit amet, consectetur</Typography>
                        <Typography sx={{
                            fontFamily: Fonts.REGULAR,
                            color: 'grey.800',
                            fontSize: '18px'
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue et eros, pellentesque et. Tristique ullamcorper ac pharetra in nisi sit vivamus lorem. </Typography>
                        <AppButton endIcon={<ArrowRightAltIcon />}>GET STARTED</AppButton>

                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={5}>
                <img src={'/images/hero.svg'} alt={'hero'} style={{ width: '50%' }} />
            </Grid>
        </Grid>
    )
}

export default Header