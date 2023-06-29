import React from "react";

export default function Card({ data }) {
  const { title, icon: Icon, desc } = data;
  return (
    <div className="card">
      <Icon className="icon" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
