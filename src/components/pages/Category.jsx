import React from 'react';

// import sunglasses from '../../assets/images/sunglasses.json';
import GlassesCard from '../elements/GlassesCard';

// filterCategory(category) {
//   this.setState({ category });
//   this.state.data.map((el) => {
//     if (el.category === category) {
//       <GlassesCard item={el} src={el.image} key={el.id} />;
//     }
//   });

const Category = () => {
  return (
    <div className="category">
      <div className="category__container">
        <div className="category__title">Different Styles</div>
        <div className="category__wrapper">
          <div className="category__block">
            <div className="category__img">
              <img src="/images/sunglasses/sunglasses-1.png" alt="" />
            </div>
            <div className="category__name">sunglasses</div>
          </div>
          <div className="category__block">
            <div className="category__img">
              <img src="/images/sunglasses/sunglasses-4.png" alt="" />
            </div>
            <div className="category__name">aviator</div>
          </div>
          <div className="category__block">
            <div className="category__img">
              <img src="/images/sunglasses/sunglasses-3.png" alt="" />
            </div>
            <div className="category__name">square</div>
          </div>
          <div className="category__block">
            <div className="category__img">
              <img src="/images/sunglasses/prescription-3.png" alt="" />
            </div>
            <div className="category__name">sunglasses</div>
          </div>

          <div className="category__block">
            <div className="category__img">
              <img src="/images/sunglasses/prescription-4.png" alt="" />
            </div>
            <div className="category__name">square</div>
          </div>
          <div className="category__block">
            <div className="category__img">
              <img src="/images/sunglasses/protective-3.png" alt="" />
            </div>
            <div className="category__name">sunglasses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
