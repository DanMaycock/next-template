"use client";

import theme from "../theme";
import AuthContext from "./auth_context";
import ChakraContext from "./chakra_context";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ChakraContext theme={theme}>{children}</ChakraContext>
        </AuthContext>
      </body>
    </html>
  );
};

export default RootLayout;
