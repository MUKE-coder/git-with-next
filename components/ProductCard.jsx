import Link from "next/link";
import React from "react";

export default function ProductCard({ title, desc, id }) {
  return (
    <Link href={`/products/${id}`} className="product">
      <h2>{title}</h2>
      <p>{desc}</p>
    </Link>
  );
}
