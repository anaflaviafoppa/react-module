import React, { Fragment } from 'react';
import Header from '../common/Header';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col mt-5 mb-5">
            <h2>Home</h2>
            <h6 className="mt-5">
              Code Camp is a community event where developers learn from fellow developrs. We also
              have related Sadipscing duo amet magna sit rebum. Accusam et magna ut sit ipsum erat
              clita takimata ipsum. Ipsum ea justo eos magna gubergren tempor est sed takimata, duo
              stet kasd erat et aliquyam nonumy dolor sadipscing, labore elitr dolor ut diam labore
              erat et. Est sed sed et dolore magna ipsum diam elitr dolore, sea labore eirmod duo
              est dolor.
            </h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
