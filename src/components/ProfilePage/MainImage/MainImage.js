import Style from './MainImage.module.css';
import che from '../../../assets/images/che.jpg';

const MainImage = () => {
  return (
    <div className={Style.wrapper}>
      <img src={che} alt="chelyabinsk" className={Style.image} />
    </div>

  );
}

export default MainImage;