import BarButton from "@/feat/button/bar";
import Navbar from "@/feat/navbar";
import SearchBar from "@/feat/search";
import Thumbnails from "@/feat/thumbnail";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-4">
        <div className="flex flex-wrap md:flex-nowrap md:flex-row gap-4 place-content-between">
          <BarButton icon="filter_alt" text="Filters" />
          <SearchBar className="order-first w-full md:order-none" />
          <BarButton icon="filter_list" text="Sort" />
        </div>
        <Thumbnails />
      </div>
    </main>
  );
}
