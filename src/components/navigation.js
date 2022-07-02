import { AppBar, Container, Typography, Toolbar } from "@mui/material";
import React from "react";
import "../styles/global.css";

export default function Navigation(props) {
     return (
          <AppBar color="inherit">
               <Container>
                    <Toolbar className="navigation">
                         <Typography>PortFolio</Typography>
                         <div className="links_container">{props.links}</div>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
