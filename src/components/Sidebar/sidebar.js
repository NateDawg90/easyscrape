import React from 'react';
import './sidebar.css';
import create from '../../assets/icons/create-plus.svg';
import scrapes from '../../assets/icons/coding-selected.svg';

class Sidebar extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        hovered: false
      };
  }
    
  render() {
    return (
      <div 
        className={`flex flex-col border h-screen p-2 pt-20`}
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
      >
        <div className="p-2 flex items-center mb-10 hover:bg-gray-300 hover:text-gray-700 rounded">
          <img alt='create' src={create} className="mr-3" width='35' height='35'/>
          {this.state.hovered &&
            <span className='text-xl mr-10'>Create scrape</span>
          } 
        </div>
        <div className='p-2 flex items-center mb-10 hover:bg-gray-300 hover:text-gray-700 rounded'>
          <img alt='sheets' src={scrapes} className="mr-3"  width='35' height='35'/>
          {this.state.hovered &&
            <span className='text-xl'>My Scrapes</span>
          }
        </div>

      </div>

    );
  }
}

export default Sidebar;


