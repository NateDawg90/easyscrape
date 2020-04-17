import React from "react";

import arrow from '../../assets/icons/right-arrow.svg';

class Breadcrumb extends React.Component {

  render() {
    return (
      <div className='flex flex-grow items-center p-3 text-xl'>
        <span className='font-bold'>All</span>
        {this.props.trail.map((val, idx) => {
          return (
            <div key={idx} className='flex text-gray-700 '>
              <img src={arrow} alt='arrow' width='20' className='mx-2 rotate-90'/>
              {val}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Breadcrumb;