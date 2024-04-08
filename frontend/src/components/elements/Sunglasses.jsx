import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { fetchGlasses, clearItems } from '../../store/glasses';
import GlassesCard from './GlassesCard';

const selectItems = (state) => ({
  items: state.glasses.items,
  status: state.glasses.status,
});

const Sunglasses = () => {
  const { items, status } = useSelector(selectItems);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGlasses());
  }, []);

  const sunglassesItems = (categories) => {
    return categories.map((category) => {
      const filteredItems = Array.isArray(items)
        ? items.filter((el) => el.category === category)
        : [];
      return (
        <div key={category}>
          <div className="glasses__title">{category.replace('-', ' ')}</div>
          <div className="glasses__wrapper">
            {filteredItems.map((el) => (
              <GlassesCard key={el.id} {...el} />
            ))}
          </div>
        </div>
      );
    });
  };

  if (!items || items.length === 0) {
    return <div>No items found</div>;
  }

  if (status == 'pending') {
    return <div>loading</div>;
  }

  return (
    items.length !== 0 && (
      <div className="glasses glasses__container">
        {status == 'pending' ? (
          <Skeleton />
        ) : (
          sunglassesItems(['sunglasses', 'prescription-frames', 'protective-eyeware'])
        )}
      </div>
    )
  );
};

export default Sunglasses;
