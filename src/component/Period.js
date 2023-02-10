import React, { useState } from 'react';
import './Style/Period.scss';
import cenData from '../data/data.json';
import Artist from './Artist';
import { Link } from 'react-router-dom';

const Period = () => {
  const data16Cen = cenData.cen16th;
  const data17Cen = cenData.cen17th;

  //forit문으로 json 돌리기

  const century = ['15th Century', '16th Century', '17th Century', '18th Century', '19th Century', '20th Century']

  // menu hide, show
  const [listView, setListView] = useState(false);
  const menuBlock = () => {
    setListView(!listView);
  }


  return (

      <div className='periodWrapper'>

        <section className='periBtnCont'>
          <div className='periBtn'>
            <button onClick={menuBlock}>
              15 Segi
            </button>
          </div>
          <div className={`periCenMenu ${listView ? "active" : ""}`}>
            { 
              century.map((btn, idx) => {

                return (<button className='periCenBtn' key={idx}>
                  {btn}
                  {/* //if(idx == century.id) */}
                </button>)
              })
            }
          </div>
        </section>

        <section className='periListCont'>
          {/* {
            data16Cen.map((el, idx) => {
              return (
                <div className='periListBox' key={idx}>
                  <Link to='/'>
                    <p className='cenNum'>{'0' + (idx + 1)}</p>
                    <p>{el.artist}</p>
                    <div className='periListImgBox' style={{ backgroundImage: `url(${el.image})` }}>
                    </div>
                  </Link>
                </div>
              )
            })
          } */}

          <Link to="/Artist">
            artist01
          </Link>

          <Link to="/Artist">
            artist02
          </Link>
          
        </section>

      </div>

  )
}

export default Period