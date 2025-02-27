import Image from "next/image";
import IconButton from "../button/icon";
import "material-icons/iconfont/material-icons.css";

export default function Navbar() {
  return (
    <nav>
      <div className="flex p-2 border-0 border-b border-b-stone-200 items-center flex-row justify-between h-16">
        <div className="flex flex-row items-center">
          <Image
            src="/assets/freeRoomsLogo.png"
            alt="Freerooms logo"
            width={45}
            height={45}
            className="me-1"
          />
          <h1 className="text-2xl">Freerooms</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <IconButton icon="search" />
          <IconButton icon="grid_view" />
          <IconButton icon="map" />
          <IconButton icon="dark_mode" />
        </div>
      </div>
    </nav>
  );
}
