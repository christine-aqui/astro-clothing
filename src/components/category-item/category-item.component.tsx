import './category-item.styles.scss';

interface categoryProps {
  category: {
    id: number
    imageUrl: string
    title: string
  }
}

const CategoryItem = ({ category }: categoryProps) => {
  const { imageUrl, title } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;