/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Filter = ({ active, onClick, children }) => {
  return (
    <a href="#" style={{ fontWeight: active ? 'bold' : 'normal' }} onClick={(e) => {
      onClick(e);
    }}> {children} </a>
  )
}

export default Filter;

