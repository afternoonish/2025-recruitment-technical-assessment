import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="flex p-2 border-0 border-b-2 border-b-stone-200">
        <Image src="/assets/freeRoomsLogo.png" alt="Freerooms logo" width={50} height={50} />
      </div>
    </nav>
  );
}
