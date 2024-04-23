import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/6dd956e6-761e-4ce4-8665-effeb5c30bd4-1sbht.JPG",
  "https://utfs.io/f/cddcac2e-9b3a-45cb-9483-2dd999ad3e90-1sbhw.JPG",
  "https://utfs.io/f/312228b9-107c-4d6d-8d3f-982e96620bce-1sbhv.JPG",
  "https://utfs.io/f/d1931898-d568-43df-bc64-49d3340d64c1-1sbhu.JPG",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
