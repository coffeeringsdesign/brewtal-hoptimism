import React from 'react';
import Keg from './Keg';
import rpm from '../assets/images/rpm.jpg';
import hopVenom from '../assets/images/hopvenom.jpeg';

const masterTappedKegList = [
  {
    tapped: true,
    name: 'RPM',
    brewery: 'Boneyard',
    img: rpm,
    style: 'IPA',
    abv: '6.5%',
    ibu: '50',
    price: '$7',
    pintCount: '',
    region: 'local'
  },
  {
    tapped: true,
    name: 'Hop Venom',
    brewery: 'Boneyard',
    img: hopVenom,
    style: 'Double IPA',
    abv: '9%',
    ibu: '60',
    price: '$8',
    pintCount: '86',
    region: 'local'
  }
]

function KegList() {
  const kegListStyles ={
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    width: '80%',
    backgroundColor: 'red'
  }

  return(
    <div>
      <h3 style={kegListStyles}>keg list here</h3>
      {masterTappedKegList.map((beer, index) =>
      <Keg tapped={beer.tapped}
        name={beer.name}
        brewery={beer.brewery}
        img={beer.img}
        style={beer.style}
        abv={beer.abv}
        ibu={beer.ibu}
        price={beer.price}
        pintCount={beer.pintCount}
        region={beer.region}/>
        )}
        <Keg/>
    </div>
  );
}

export default KegList;
