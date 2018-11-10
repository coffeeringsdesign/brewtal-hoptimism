import React from 'react';
import Keg from './Keg';
import rpm from '../assets/images/rpm.jpg';
import hopVenom from '../assets/images/hopvenom.jpeg';
import barleyBrown from '../assets/images/barleybrown.png';
import luckyLab from '../assets/images/luckylab.png';
import buoy from '../assets/images/buoy.png';
import fatTire from '../assets/images/fatTire.jpeg';
import citradelic from '../assets/images/citradelic.jpg';
import furious from '../assets/images/furious.jpg';
import sculpin from '../assets/images/sculpin.jpg';

const masterTappedKegList = [
  {
    tapped: true,
    name: 'RPM',
    brewery: 'Boneyard',
    img: rpm,
    style: 'IPA',
    abv: 6.5,
    ibu: '50',
    price: '$7',
    pintCount: 101,
    region: 'local'
  },
  {
    tapped: true,
    name: 'Sculpin',
    brewery: 'Ballast Point',
    img: sculpin,
    style: 'IPA',
    abv: 7,
    ibu: '70',
    price: '$10',
    pintCount: 23,
    region: 'national'
  },
  {
    tapped: true,
    name: 'Furious',
    brewery: 'Surly Brewing Co',
    img: furious,
    style: 'IPA',
    abv: 6.7,
    ibu: 'high',
    price: '$9',
    pintCount: 64,
    region: 'national'
  },
  {
    tapped: true,
    name: 'Super Dog',
    brewery: 'Lucky Labrador',
    img: luckyLab,
    style: 'IPA',
    abv: 6.5,
    ibu: '90+',
    price: '$8',
    pintCount: 55,
    region: 'local'
  },
  {
    tapped: true,
    name: 'Citradelic',
    brewery: 'New Belgium',
    img: citradelic,
    style: 'Tangerine IPA',
    abv: 6,
    ibu: '50',
    price: '$7',
    pintCount: 1002,
    region: 'national'
  },
  {
    tapped: true,
    name: 'Hop Venom',
    brewery: 'Boneyard',
    img: hopVenom,
    style: 'Double IPA',
    abv: 9,
    ibu: '60',
    price: '$8',
    pintCount: 86,
    region: 'local'
  },
  {
    tapped: true,
    name: 'Pallet Jack',
    brewery: 'Barley Browns',
    img: barleyBrown,
    style: 'IPA',
    abv: 7,
    ibu: '63',
    price: '$7',
    pintCount: 34,
    region: 'local'
  },
  {
    tapped: true,
    name: 'Helles',
    brewery: 'Buoy Beer Co.',
    img: buoy,
    style: 'German Lager',
    abv: 5.3,
    ibu: '19',
    price: '$6',
    pintCount: 98,
    region: 'local'
  },
  {
    tapped: true,
    name: 'Fat Tire',
    brewery: 'New Belgium',
    img: fatTire,
    style: 'Amber Ale',
    abv: 5.2,
    ibu: '22',
    price: '$6',
    pintCount: 45,
    region: 'national'
  },
  {
    tapped: true,
    name: 'NW Red Ale',
    brewery: 'Buoy Beer Co.',
    img: buoy,
    style: 'Red Ale',
    abv: 6.7,
    ibu: '75',
    price: '$7',
    pintCount: 53,
    region: 'local'
  }
];

function KegList() {
  const kegListStyles ={
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    width: '80%',
    marginBottom: '70px'
  };

  return(
    <div style={kegListStyles}>
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
          region={beer.region}
          key={index}/>
      )}
      <Keg/>
    </div>
  );
}

export default KegList;
