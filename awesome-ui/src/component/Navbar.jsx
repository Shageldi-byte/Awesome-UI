import Logo from "./Icon/Logo";
import Menu from "./Icon/Menu";
import MobileDrawer from "./MobileDrawer";
import React, { useContext } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { Colors, Fonts } from "../core/theme";
import { AppButton } from "./AppComponent";

const styleNavButton = {
    color: 'grey.900',
    textTransform: 'none',
    fontFamily: Fonts.MEDIUM
}

const Navbar = () => {


    const { mobile } = useContext(AppContext);


    return (
        <Stack direction={'row'} sx={{ width: '100%', pt: 5, pb: 5 }} justifyContent={'space-between'} alignItems={'center'}>
            <Box onClick={() => navigate('/')}>
                <Logo fill={Colors.PRIMARY} />
            </Box>
            {
                mobile ? <MobileDrawer /> :
                    <NavbarButtons mobile={mobile} />
            }
        </Stack>
    )
}

export const NavbarButtons = (props) => {
    const mobile = props.mobile;
    const navigate = useNavigate()
    function changeRouet(path) {
        navigate(path);
        if (props.close) {
            props.close();
        }


    }
    return (
        <Stack direction={mobile ? 'column' : 'row'} alignItems={'center'} spacing={2}>
            <Button onClick={() => changeRouet('about')} sx={{ ...styleNavButton }}>About Us</Button>
            <Button onClick={() => changeRouet('contact')} sx={{ ...styleNavButton }}>Contact Us</Button>
            <Button sx={{ ...styleNavButton }}>Store</Button>
            <Button sx={{ ...styleNavButton }}>Use Cases</Button>
            <AppButton>Register</AppButton>
        </Stack>
    )
}

export default Navbar