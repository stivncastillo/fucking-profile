import Link from 'next/link'
import React from 'react'
import CategoryItem from './CategoryItem'

interface CategoryListProps {
  categories: Category[];
  categoryActive?: string | null;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, categoryActive }) => {
  if (!categories.length) {
    return null
  }

  return (
    <ul className="flex flex-row space-x-2 justify-center lg:justify-start">
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} active={categoryActive === category.slug} />
      ))}

      <li className="category-container--last">
        <Link href={'/page/1'}>
          <a
            className={'category-item bg-white text-slate-400 border border-slate-200'}
          >
            All
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default CategoryList
