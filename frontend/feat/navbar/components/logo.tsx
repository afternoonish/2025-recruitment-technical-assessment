'use client';

import Image from "next/image";
import React from "react";

export default function Logo() {
  const [open, setOpen] = React.useState(true);

  const openLogo = "/assets/freeRoomsLogo.png";
  const closeLogo = "/assets/freeroomsDoorClosed.png";

  return (
    <Image
      src={open ? openLogo : closeLogo}
      alt="Freerooms logo"
      width={45}
      height={45}
      className="me-1 hover:cursor-pointer"
      onClick={() => setOpen(!open)}
    />
  );
}
