import Style from './Preloader.module.css';

const Preloader = () => (
  <div className={Style.container}>
    <div className={Style.item1}></div>
    <div className={Style.item2}></div>
    <div className={Style.item3}></div>
    <div className={Style.item4}></div>
    <div className={Style.item5}></div>
  </div>);

export default Preloader;