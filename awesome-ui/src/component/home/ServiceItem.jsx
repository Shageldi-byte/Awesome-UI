import React, { useState } from "react";
import SmartCar from "../Icon/SmartCar";
import { Card, CardActionArea, CardContent, Paper, Typography } from "@mui/material";
import { Colors, Fonts } from "../../core/theme";

const ServiceItem = (props) => {
    const passive = {
        bg: "transparent",
        iconBg: "white",
        iconTint: Colors.PRIMARY
    }

    const active = {
        bg: "white",
        iconBg: Colors.PRIMARY,
        iconTint: "white"
    }
    const [colors, setColors] = useState(passive);


    return (
        <Card onMouseEnter={e => setColors(active)} onMouseLeave={e => setColors(passive)} sx={{ backgroundColor: colors.bg }} elevation={0}>
            <CardActionArea>
                <CardContent>
                    <Paper sx={{ backgroundColor: colors.iconBg, width: '30px', p: 2 }} elevation={0}>
                        {props.item.icon}
                    </Paper>

                    <Typography sx={{
                        fontFamily: Fonts.MEDIUM,
                        fontSize: '24px',
                        mt: 2,
                        color: 'grey.900'
                    }}>{props.item.title}</Typography>
                    <Typography sx={{
                        fontFamily: Fonts.REGULAR,
                        fontSize: '13px',
                        mt: 1,
                        color: 'grey.800'
                    }}>{props.item.desc}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ServiceItem