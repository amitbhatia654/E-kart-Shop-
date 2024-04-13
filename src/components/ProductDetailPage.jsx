import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const param = useParams();
  return <div>This is a product detail page {param.id}</div>;
}
