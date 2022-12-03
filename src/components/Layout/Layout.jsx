import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import Box from "components/Box";
import { Suspense } from "react";
const Layout = () => {
  return (
    <>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="22px"
        maxWidth="1600px"
      >
        <Navigation />
        <UserMenu />
      </Box>
      <Box as="main" maxWidth="1600px" p="22px">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default Layout;