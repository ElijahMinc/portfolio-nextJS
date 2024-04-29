import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Spinner = ({ size = 'lg' }: SpinnerProps) => (
  <div className={`flex justify-center items-center ${size}`}>
    <div className={`lds-roller `}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
