import Link from 'next/link';

export default function CategoryLabel({ category }) {
  const colorKey = {
    Korea: 'yellow',
    America: 'blue',
    Japan: 'green',
    China: 'purple',
    Ruby: 'red',
  };

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[category]}-600 text-gray-100 font-bold rounded`}>
      <Link href={`/blog/category/${category.toLowerCase()}`}>{category}</Link>
    </div>
  );
}
