import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ title, id, src }) {
  return (
    <Link href={`/categories/${id}`} className="category">
      <div className="category-image">
        <Image src={src} fill alt={title} />
      </div>
      <h2>{title}</h2>
    </Link>
  );
}
