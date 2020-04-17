import React from 'react';
import './assets/App.css';
import Sidebar from './components/Sidebar/sidebar.js';
import Header from './components/Header/header.js';
import Breadcrumb from './components/Breadcrumb/Breadcrumb.js';
import Tabs from './components/Tabs/Tabs.js';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className='w-full'>
        <Header name='JP'/>
        <Breadcrumb
          trail={['My Yelp Scrape']}
        />
        <Tabs>
          <div className='' label="Schedule">
            This is the content for Schedules!
          </div>
          <div label="Templates">
            This is the content for Templates!
          </div>
          <div label="History">
          This is the content for History!
          </div>
          <div label="View Results">
          This is the content for View Results!
          </div>
        </Tabs>        

      </div>
    </div>
  );
}

export default App;
