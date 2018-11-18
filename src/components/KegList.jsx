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
import { v4 } from 'uuid';

class KegList extends React.Component {

  constructor(props) {
    super();
    this.state = {
      tapped: true,
      lowPint: false,
      masterTappedKegList: [
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
          region: 'local',
          lowPint: false
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
          region: 'national',
          lowPint: false
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
          region: 'national',
          lowPint: false
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
          region: 'local',
          lowPint: false
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
          region: 'national',
          lowPint: false
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
          region: 'local',
          lowPint: false
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
          region: 'local',
          lowPint: false
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
          region: 'local',
          lowPint: false
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
          region: 'national',
          lowPint: false
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
          region: 'local',
          lowPint: false
        }
      ]
    };
    this.handleAddingNewKegSubmit = this.handleAddingNewKegSubmit.bind(this);
  }

  // abvColorChange(abvColorClass) {
  //   if (this.state.masterTappedKegList.abv >= 9){
  //     return abvColorClass = "#C65543";
  //   } else if ((this.state.masterTappedKegList.abv <=4) && (this.state.masterTappedKegList.abv <=8)) {
  //     return abvColorClass = "#D16655";
  //   } else {
  //     return abvColorClass = "#F99E90";
  //   }
  // }
  handleSendingNewKegToList(key) {
    let newTappedKegList = JSON.parse(JSON.stringify(this.state.masterTappedKegList));
    newTappedKegList[key].important = !newTappedKegList[key].important;
    this.setState({
      masterTappedKegList: newMasterTappedKegList
    }, () => {
      console.log(this.state.masterTappedKegList);
    });
  };

  handleAddingNewKegSubmit(event) {
    event.preventDefault();
    this.onNewKegAddition({name: _name.value, brewery: _brewery.value, style: _style.value, abv: _abv.value, ibu: _ibu.value, price: _price.value, pintCount: _pintCount.value, region: _region.value, id: v4()});
    _name.value = '';
    _brewery.value = '';
    _style.value = '';
    _abv.value = '';
    _ibu.value = '';
    _price.value = '';
    _pintCount.value = '';
    _region.value = '';
  }



  render(props){
    return(
      <div className="kegListStyles">
        <style jsx>{`
          .kegListStyles {
            margin-left: auto;
            margin-right: auto;
            padding-top: 20px;
            width: 97%;
            padding-bottom: 70px;
            background-color: white;
            margin-bottom: 25px;
            filter: drop-shadow(0 0 0.5rem black);
          }
        `}</style>
        {this.state.masterTappedKegList.map((beer) =>
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
            key={beer.id}
          />
        )}
        <form onSubmit={this.handleAddingNewKegSubmit}>
          <h1>Add Keg</h1>
          <label>Enter Keg name:</label>
          <input
            type='text'
            id='name'
            ref={(input) => {_name = input;}}/>
          <label>Enter Brewery name:</label>
          <input
            type='text'
            id='brewery'
            ref={(input) => {_brewery = input;}}/>
          <label>Enter Style:</label>
          <input
            type='text'
            id='style'
            ref={(input) => {_style = input;}}/>
          <label>Enter ABV:</label>
          <input
            type='text'
            id='abv'
            ref={(input) => {_abv = input;}}/>
          <label>Enter IBU:</label>
          <input
            type='text'
            id='ibu'
            ref={(input) => {_ibu = input;}}/>
          <label>Enter Price:</label>
          <input
            type='text'
            id='price'
            ref={(input) => {_price = input;}}/>
          <label>Enter Pint Count:</label>
          <input
            type='number'
            id='pintCount'
            ref={(input) => {_pintCount = input;}}/>
          <label>Region:</label>
          <select

            ref={(select) => {_region = select;}}>
            <option value='local'> Local Region </option>
            <option value='local'> National Region </option>
            <option value='local'> International Region </option>
          </select>
          <button stype='submit'>Add Keg</button>
        </form>
      </div>
    );
  }
}

// adding submit function to top of form
///handleAddingNewKegSubmit isn't being called trying adding this. to function XX - removed
// trying adding this. to call of function == page loads again - added console log to see if connection to function works
//handleAddingNewKegSubmit function is being called! but not correctly connecting with onNewKegAddition
//first change props to this
//second change to this.state.
//name is not defined

export default KegList;
