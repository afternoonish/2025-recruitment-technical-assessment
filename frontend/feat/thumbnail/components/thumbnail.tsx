interface ThumbnailProps {
  image: string;
  name: string;
  rooms: number;
}

export default function Thumbnail({ image, name, rooms }: ThumbnailProps) {
  return (
    <div
      className={`rounded-xl p-3 h-32 md:h-60 lg:h-96 flex md:flex-col place-items-center md:place-items-stretch place-content-between bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-10 w-min rounded-2xl bg-white md:self-end flex place-items-center place-content-between text-sm md:text-xs px-4 gap-2 order-2 md:order-1">
        <div>
          <div className="h-3 w-3 bg-green-600 rounded-full"></div>
        </div>
        <div className="w-max font-bold hidden md:block">
          {rooms} rooms available
        </div>
        <div className="w-max font-bold md:hidden">
          {rooms} / {rooms}
        </div>
      </div>
      <div className="h-14 rounded-xl md:bg-orange-500 bg-none text-lg text-white flex place-items-center p-5 font-bold md:text-base order-1 md:order-2">
        {name}
      </div>
    </div>
  );
}
