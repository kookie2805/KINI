import React from "react";
import { useMediaQuery } from "react-responsive";
import FooterDesktop from "./footerdesktop";
import FooterMobile from "./footermobile";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Sesuai breakpoint Tailwind untuk mobile

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
