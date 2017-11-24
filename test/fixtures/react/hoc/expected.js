import React, { Component } from 'react';

const hoc = fn => {
  return <div data-qa="hoc">
      {fn()}
  </div>;
};

const componentName = hoc(() => {
  return <div data-qa="component-name">Hello</div>;
});

export default componentName;
