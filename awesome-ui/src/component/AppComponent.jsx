import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fonts } from "../core/theme";

export const Basic = styled(Box)({

    backgroundColor: 'aliceblue',
    color: 'darkslategray',
    padding: '2rem',
    textAlign: 'center'

})

export const UsingTheme = styled(Box)(
    ({ theme }) => ({
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.grey[900],
        padding: theme.spacing(2),
        textAlign: 'center',
        ...theme.typography.h6,
    })
)

export const UsingMediaQuery = styled(Box)(

    ({ theme }) => `

    background-color: ${theme.palette.primary.light};
    color: ${theme.palette.grey[900]};


    // Phone version
    @media only screen and  (max-width: ${theme.breakpoints.values.sm}px) {

        background-color: ${theme.palette.primary.dark};
        color: ${theme.palette.grey[100]};
    }


    // Tablet version
    @media only screen and  (min-width: ${theme.breakpoints.values.sm}px) and (max-width: ${theme.breakpoints.values.lg}px){

        background-color: ${theme.palette.secondary.dark};
        color: ${theme.palette.grey[100]};
    }

   `,
)


export const AppButton = styled(Button)(
    ({ theme }) => `
        background: linear-gradient(102.3deg, ${theme.palette.primary.dark} -4.62%, ${theme.palette.primary.light} 178.22%);
        box-shadow: 0px 20px 40px rgba(128, 143, 150, 0.19);
        border-radius: 2px;
        color: ${theme.palette.primary.contrastText};
        font-family: ${Fonts.MEDIUM};
        text-transform: none;
        padding: 12px;
    `
);