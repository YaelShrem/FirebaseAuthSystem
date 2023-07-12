import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import LoginBackground from "./LoginBackground";
import { styled } from "@mui/material";
import { TabPanel, a11yProps } from "./TabPanel";
import Signup from "./Signup";
import Signin from "./Signin";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AnimatedTextWord from "./AnimatedText";

const StyledTab = styled(Tab)({
  "&.Mui-selected": {
    color: "#20386F !important",
  },
});

const BackgroundContainer = styled(Container)({
  width: "100vw",
  height: "100vh",
  maxWidth: "5000px !important",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  background:
    "linear-gradient(to top,#F4F9FF 0%, #F4F9FF 50%, #101F4F 50%, #101F4F 100%)",
});

const LogoContainer = styled(Container)({
  display: "flex", 
  justifyContent: "center"
});

const TabContainer= styled(TabPanel)({
  ".MuiBox-root": {
    padding: "0 10px 0 10px",
  }
})
const Logo = () => {
  return (
    <svg
      width="163"
      height="85"
      viewBox="0 0 203 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2582_175771)">
        <path
          d="M28 34.5H154C157.59 34.5 160.5 37.4101 160.5 41V97C160.5 100.59 157.59 103.5 154 103.5H28C24.4101 103.5 21.5 100.59 21.5 97V41C21.5 37.4101 24.4101 34.5 28 34.5Z"
          stroke="#30B7C1"
          stroke-width="3"
        />
        <path
          d="M52.1892 80.9672V74.3279C52.1892 73.3443 52.0261 72.7158 51.6999 72.4426C51.3738 72.1148 50.7214 71.9508 49.7428 71.9508H45.5839C40.528 71.9508 38 69.5464 38 64.7377V56.2951C38 51.4317 40.528 49 45.5839 49H51.5368C56.6471 49 59.2023 51.4317 59.2023 56.2951V60.1475H52.0261V57.0328C52.0261 56.0492 51.863 55.4208 51.5368 55.1475C51.2107 54.8197 50.5583 54.6557 49.5797 54.6557H47.6226C46.644 54.6557 45.9916 54.8197 45.6654 55.1475C45.3393 55.4208 45.1762 56.0492 45.1762 57.0328V63.918C45.1762 64.9016 45.3393 65.5574 45.6654 65.8852C45.9916 66.1585 46.644 66.2951 47.6226 66.2951H51.863C56.8646 66.2951 59.3654 68.7268 59.3654 73.5902V81.7869C59.3654 86.5956 56.8374 89 51.7815 89H45.747C40.6911 89 38.1631 86.5956 38.1631 81.7869V77.8525H45.3393V80.9672C45.3393 81.9508 45.5024 82.6066 45.8285 82.9344C46.1547 83.2076 46.8071 83.3443 47.7857 83.3443H49.7428C50.7214 83.3443 51.3738 83.2076 51.6999 82.9344C52.0261 82.6066 52.1892 81.9508 52.1892 80.9672Z"
          fill="white"
        />
        <path
          d="M80.4963 49H87.8356V89H80.4963V85.8033C79.7896 87.9344 78.1043 89 75.4404 89H72.5047C67.6119 89 65.1654 86.5956 65.1654 81.7869V56.2951C65.1654 51.4317 67.6119 49 72.5047 49H75.4404C78.1043 49 79.7896 50.0656 80.4963 52.1967V49ZM74.9511 83.0164H77.8053C78.7838 83.0164 79.4634 82.7978 79.8439 82.3607C80.2789 81.9235 80.4963 81.1858 80.4963 80.1475V57.8525C80.4963 56.8142 80.2789 56.0765 79.8439 55.6393C79.4634 55.2022 78.7838 54.9836 77.8053 54.9836H74.9511C73.9725 54.9836 73.3202 55.1475 72.994 55.4754C72.6678 55.7486 72.5047 56.3771 72.5047 57.3607V80.6393C72.5047 81.623 72.6678 82.2787 72.994 82.6066C73.3202 82.8798 73.9725 83.0164 74.9511 83.0164Z"
          fill="white"
        />
        <path
          d="M99.1178 49L104.337 82.7705L109.637 49H116.977L109.637 89H99.1178L91.7785 49H99.1178Z"
          fill="white"
        />
        <path
          d="M128.343 49H136.335C141.445 49 144 51.4317 144 56.2951V71.2951H127.935V80.8033C127.935 81.7322 128.098 82.3607 128.424 82.6885C128.751 83.0164 129.403 83.1803 130.382 83.1803H134.133C135.111 83.1803 135.764 83.0164 136.09 82.6885C136.416 82.3607 136.579 81.7049 136.579 80.7213V77.4426H143.755V81.7869C143.755 86.5956 141.227 89 136.171 89H128.343C123.287 89 120.759 86.5956 120.759 81.7869V56.2951C120.759 51.4317 123.287 49 128.343 49ZM127.935 65.8852H136.742V57.1967C136.742 56.2678 136.579 55.6393 136.253 55.3115C135.981 54.9836 135.356 54.8197 134.377 54.8197H130.382C129.403 54.8197 128.751 54.9836 128.424 55.3115C128.098 55.6393 127.935 56.2678 127.935 57.1967V65.8852Z"
          fill="white"
        />
        <path
          d="M144 28C144 23.5817 147.582 20 152 20H175C179.418 20 183 23.5817 183 28V37C183 41.4183 179.418 45 175 45H144V28Z"
          fill="#30B7C1"
        />
        <path
          d="M149 25H154.699C156.484 25 157.376 25.7845 157.376 27.3534V32.1315C157.376 33.7005 156.484 34.4849 154.699 34.4849H151.825V40H149V25ZM154.552 31.7512V27.7338C154.552 27.4802 154.502 27.3138 154.404 27.2345C154.306 27.1395 154.126 27.0919 153.864 27.0919H151.825V32.393H153.864C154.126 32.393 154.306 32.3534 154.404 32.2742C154.502 32.1791 154.552 32.0048 154.552 31.7512Z"
          fill="white"
        />
        <path
          d="M162.02 34.1521V40H159.195V25H164.894C166.679 25 167.571 25.7845 167.571 27.3534V31.7987C167.571 33.0983 166.974 33.859 165.778 34.0808L168.358 40H165.312L162.953 34.1521H162.02ZM162.02 27.0919V32.1315H164.059C164.321 32.1315 164.501 32.0919 164.599 32.0127C164.697 31.9176 164.747 31.7433 164.747 31.4897V27.7338C164.747 27.4802 164.697 27.3138 164.599 27.2345C164.501 27.1395 164.321 27.0919 164.059 27.0919H162.02Z"
          fill="white"
        />
        <path
          d="M172.329 25H175.326C177.111 25 178.004 25.7845 178.004 27.3534V37.6466C178.004 39.2155 177.111 40 175.326 40H172.329C170.544 40 169.652 39.2155 169.652 37.6466V27.3534C169.652 25.7845 170.544 25 172.329 25ZM175.179 37.2662V27.7338C175.179 27.4802 175.13 27.3138 175.031 27.2345C174.933 27.1395 174.753 27.0919 174.491 27.0919H173.189C172.911 27.0919 172.722 27.1395 172.624 27.2345C172.526 27.3138 172.477 27.4802 172.477 27.7338V37.2662C172.477 37.5198 172.526 37.6941 172.624 37.7892C172.722 37.8685 172.911 37.9081 173.189 37.9081H174.491C174.753 37.9081 174.933 37.8685 175.031 37.7892C175.13 37.6941 175.179 37.5198 175.179 37.2662Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2582_175771"
          x="0"
          y="0"
          width="203"
          height="125"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2582_175771"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2582_175771"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const LoginPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <LoginBackground>
      <Container component="main" maxWidth="sm" sx={{ 
        mb: 4 ,
        width: '370px',
        //height: '200px'
        }}>
      
      <Grid item xs={12} sm={8}
       
      md={5} component={Paper}
       elevation={6} sx={{borderRadius: '0.5rem'}}>
          <Box
            sx={{
              my: { xs: 3, md: 6 },
              p: { xs: 2, md: 3 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="login"
            indicatorColor="primary"
            textColor="inherit"
            TabIndicatorProps={{ style: { background: "#865DFF" ,
            } }}
          >
          <StyledTab disableRipple label="Sign up" {...a11yProps(0)} />
          <StyledTab disableRipple label="Sign in" {...a11yProps(1)} />

        </Tabs>

        <TabContainer value={value} index={0}>
          {/* <Signup /> */}
        </TabContainer>

        <TabContainer value={value} index={1} >
          <Signin />
        </TabContainer>
        </Box>
        </Grid>
    </Container>
    </LoginBackground>

  );
};

export default LoginPage;
