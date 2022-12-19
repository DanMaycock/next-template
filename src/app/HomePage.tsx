"use client";
import NextLink from "next/link";
import { Heading, Link } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Heading>Hello Chakra!!</Heading>
      <Link as={NextLink} href="/auth">
        Sign In
      </Link>
    </>
  );
};

export default HomePage;
