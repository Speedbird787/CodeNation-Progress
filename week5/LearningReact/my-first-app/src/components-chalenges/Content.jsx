// task 5

import Card from './Card';
import Hypercar from '../images/Hypercar1.jpeg';
import Pottercar from '../images/Pottercar1.jpeg';
import Jdm from '../images/Jdm1.jpeg';
import Banger from '../images/banger1.jpeg';

const Content = ({heading}) => {
  return (
    <div>
      <h2>{heading}</h2>
      <div className="news-carousel">
        <Card title="Get the chance to take a ride in this space ship!" image={Hypercar} />
        <Card title="Magical but ugly" image={Pottercar} />
        <Card title="Now this is a beast that could swallow you whole!" image={Jdm} />
        <Card title="what a beaut this thing is" image={Hypercar} />
        <Card title="ahh if only grandpa was alive today he would kill to be in one of these babies!" image={Banger} />
      </div>
    </div>
  )
}

export default Content;