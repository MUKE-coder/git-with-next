import React from "react";

export default function ServiceCard({ data }) {
  const { title, desc, image, items } = data;
  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
