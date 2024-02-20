import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border my-4 w-80 shadow hover:shadow-xl min-w-80">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width="320"
          height="240"
        />
        <div className="p-2 flex justify-between">
          <h2 className="text-lg font-bold items-baseline">{product.title}</h2>
          <span>{product.price}</span>
        </div>
      </Link>
    </div>
  );
}
