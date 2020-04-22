import React from 'react';
import SignMeUp from '../Forms/SignMeUp';

const Header = () => {
  const signupCallback = (email) => {
    return console.log(`sign up called with email ${email}`);
  };

  return (
    <div className="jumbotron ">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">October 20-20</h6>
          <h6 className="text-uppercase">San Jose, Californa</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <figure></figure>
          <h2>Sillicon Valley Code Camp 2020</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
