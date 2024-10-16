// src/components/Layout.tsx
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/appBar"; // Assuming you have a custom AppBar component
import Footer from "./components/footer"; // Assuming you have a custom Footer component

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* AppBar at the top */}
      <ResponsiveAppBar />
      {/* Main content area */}
      <Box component="main" flexGrow={1}>
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
      {/* Footer at the bottom */}
      <Footer />
    </Box>
  );
};

export default Layout;
