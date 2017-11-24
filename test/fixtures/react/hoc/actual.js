import React, { Component } from 'react';

const hoc = (fn) => {
  return <div>
      {fn()}
  </div>;
};

const componentName = hoc(() => {
  return <div>Hello</div>;
});

export default componentName;
