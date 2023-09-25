import React, { useState } from 'react';
import './Card.css';
import imgEmail from '../../images/email.svg';
import imgWebsite from '../../images/website.svg';
import imgPhone from '../../images/call.svg';
import imgStreet from '../../images/street.svg';
import imgSuite from '../../images/suite.svg';
import imgCity from '../../images/city.svg';
import imgZipcode from '../../images/zipcode.svg';
import imgNamecompany from '../../images/namecompany.svg';
import imgCatchPhrase from '../../images/catchPhrase.svg';
import imgBs from '../../images/bs.svg';

const Card = ({ userData }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCard = () => {
    setIsActive(!isActive);
  };

  const {
    name = '{name}',
    username = '{username}',
    email = '{email}',
    website = '{website}',
    phone = '{phone}',
    address: {
      street = '{street}',
      suite = '{suite}',
      city = '{city}',
      zipcode = '{zipcode}',
    } = {},
    company: {
      name:namecompany = '{namecompany}',
      catchPhrase = '{catchPhrase}',
      bs = '{bs}',
    } = {},
  } = userData;

  return (
    <div
      className={`card ${isActive ? 'active' : 'inactive'}`}
      onClick={toggleCard}
    >
      <div className="card__container">
        <div className="card__container-lastname">
          <p className="card__container-title">
            {name ? name.split(' ').map(word => word.charAt(0).toUpperCase()).join('') : 'LN'}
          </p>
        </div>
        <div className="card__user">
          <p className="card__user-name">{name}</p>
          <p className="card__user-username">{username}</p>
        </div>
      </div>
      <div className="card__content">
        <div className="card__content_str">
          <img src={imgEmail} alt="email user" className="icon" />
          <div className="user-info">email:{email}</div>
        </div>
        <div className="card__content_str">
          <img src={imgWebsite} alt="website user" className="icon" />
          <div className="user-info">website:{website}</div>
        </div>
        <div className="card__content_str">
          <img src={imgPhone} alt="phone user" className="icon" />
          <div className="user-info">phone:{phone}</div>
        </div>

        {isActive && (
          <>
            <div className="card__content_str">
              <img src={imgStreet} alt="phone user" className="icon-dop" />
              <div className="user-info">street:{street}</div>
            </div>
            <div className="card__content_str">
              <img src={imgSuite} alt="phone user" className="icon-dop" />
              <div className="user-info">suite:{suite}</div>
            </div>
            <div className="card__content_str">
              <img src={imgCity} alt="phone user" className="icon-dop" />
              <div className="user-info">city:{city}</div>
            </div>
            <div className="card__content_str">
              <img src={imgZipcode} alt="phone user" className="icon-dop" />
              <div className="user-info">zipcode:{zipcode}</div>
            </div>
            <div className="card__content_str">
              <img src={imgNamecompany} alt="phone user" className="icon-dop" />
              <div className="user-info">namecompany:{namecompany}</div>
            </div>
            <div className="card__content_str">
              <img src={imgCatchPhrase} alt="phone user" className="icon-dop" />
              <div className="user-info">catchPhrase:{catchPhrase}</div>
            </div>
            <div className="card__content_str">
              <img src={imgBs} alt="phone user" className="icon-dop" />
              <div className="user-info">bs:{bs}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;