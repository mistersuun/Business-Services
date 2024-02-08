import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div>
      <h2>Schedule a meeting</h2>
      <InlineWidget url="https://calendly.com/bloomrise/contact" />
    </div>
  );
};

export default Calendly;
