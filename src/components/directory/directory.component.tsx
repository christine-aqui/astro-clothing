import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

interface categoryProps {
    id: number
    imageUrl: string
    title: string
}

interface categoriesProps {
  categories: categoryProps[]
}

const Directory = ({ categories }: categoriesProps) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;