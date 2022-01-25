// task 4

import Card from './Card';
import Hypercar from '../images/Hypercar1.jpeg';
import Pottercar from '../images/Pottercar1.jpeg';
import Jdm from '../images/Jdm1.jpeg';
import Banger from '../images/banger1.jpeg';

const Carousel = () => {
  return (
    <div className="carousel">
      <Card title="The bug" image={Hypercar} />
      <Card title="Harry potter's car" image={Pottercar} />
      <Card title="The bug killer" image={Jdm} />
      <Card title="Grandads dream car" image={Banger} />
    </div>
  )
}

export default Carousel;