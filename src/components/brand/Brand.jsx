import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import'
import './brand.css'

const Brand = () => {
  return (
    <section className="gpt3__brand section__padding">
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={slack} />
      </div>
      <div>
        <img src={atlassian} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </section>
  );
}

export default Brand;
