import React, { useState } from 'react'
import './NavBar.scss';
import { Tab } from '../navBarStyle';

const TabBar = () => {
  const tempData =["Wallpaper", "3D renders", "Travel", "Nature" ];
  const [ isselected, setIsSelected] = useState('Editorial');

  return (<div className='tabBarContainer'>
    <Tab
    onClick = {()=> setIsSelected('Editorial')}
    isselected={isselected.toLowerCase().match('Editorial'.toLowerCase())}

    >
      Editorial</Tab>
    <Tab
    onClick = {()=> setIsSelected('Following')}
    isselected={isselected.toLowerCase().match('Following'.toLowerCase())}
    >
      Following</Tab>
    <hr />
    {
      tempData.map((item, index) => {
        return(
          <Tab
          key ={index}
          onClick = {()=> setIsSelected(item)}
          isselected={isselected.toLowerCase().match(item.toLowerCase())}
          >
            {item}
          </Tab>
        );
      })
    }
  </div>);
}

export default TabBar;
