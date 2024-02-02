import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div>
      <h2>Schedule a meeting</h2>
      <InlineWidget url="https://calendly.com/souleydop/discovery-call" />
    </div>
  );
};

export default Calendly;
