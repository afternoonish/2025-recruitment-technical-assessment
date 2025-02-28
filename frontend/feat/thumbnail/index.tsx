import Thumbnail from "./components/thumbnail";

export default function Thumbnails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mt-4 gap-4">
      <Thumbnail image="/assets/agsm.webp" name="AGSM" rooms={9} />
      <Thumbnail
        image="/assets/ainsworth.webp"
        name="Ainsworth Building"
        rooms={16}
      />
      <Thumbnail
        image="/assets/anitab.webp"
        name="Anita B Lawrence Centre"
        rooms={44}
      />
      <Thumbnail
        image="/assets/biologicalScience.webp"
        name="Biological Sciences"
        rooms={6}
      />
      <Thumbnail
        image="/assets/biologicalScience.webp"
        name="Biological Sciences (West)"
        rooms={8}
      />
      <Thumbnail image="/assets/blockhouse.webp" name="Blockhouse" rooms={42} />
      <Thumbnail
        image="/assets/businessSchool.webp"
        name="Business School"
        rooms={18}
      />
      <Thumbnail
        image="/assets/civilBuilding.webp"
        name="Civil Engineering Building"
        rooms={8}
      />
      <Thumbnail
        image="/assets/colombo.webp"
        name="Colombo Building"
        rooms={5}
      />
      <Thumbnail
        image="/assets/cseBuilding.webp"
        name="Computer Science & Eng (K17)"
        rooms={5}
      />
    </div>
  );
}
