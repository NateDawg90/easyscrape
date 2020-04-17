import React from 'react';
import './header.css';
import logo from '../../assets/images/easyscrape.jpg';
import question from '../../assets/icons/get-help-mark.svg';

class Header extends React.Component {
  render() {
    return (
      <div className='flex flex-grow justify-between p-2 border header-bar'>
        <img className='' src={logo} alt='logo' width='130' />
        <div className='flex items-center'>
          <img className='mr-3' alt='question' src={question} width='18' height='18'/>
          
          <div className='bg-purple-700 flex items-center rounded-full text-white text-center text-sm p-2 w-8 h-8' src={question}>
            {this.props.name}
          </div>

        </div>
      </div>
    );
  }
}

export default Header;

