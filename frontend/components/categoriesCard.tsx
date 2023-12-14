import Link from "next/link";
import Card from "./card";

export default function CategoriesCard({
  categories,
}: {
  categories: string[];
}) {
  return (
    <Card>
      <ul className="text-[18px]">
        {categories.map((category, index) => {
          return (
            <li className="leading-tight" key={index}>
              <Link
                href={`/categories/${category}`}
                className="block hover:bg-black hover:text-dos-grey"
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
