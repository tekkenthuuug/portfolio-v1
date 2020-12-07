import React from 'react';
import createClassName from '../../utils/createClassName';
import styles from './next-section-arrow.module.scss';

const NextSectionArrow = ({ className, ...otherProps }) => {
  const svgClassName = createClassName({
    [styles.arrow]: true,
    [className]: !!className,
  });

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='156.871'
      height='36.001'
      viewBox='0 0 156.871 36.001'
      className={svgClassName}
      {...otherProps}
    >
      <g transform='translate(-859.703 -955.222)'>
        <g transform='translate(1016.575 852.926) rotate(90)'>
          <g transform='translate(102.297 0)'>
            <path
              d='M137.545,74.132,106.686,1.695c-1.022-2.316-2.65-2.25-3.636.149a12.541,12.541,0,0,0,0,8.387L132.09,78.4,103.05,146.568a12.471,12.471,0,0,0,0,8.535c1,2.357,2.632,2.357,3.636,0l30.859-72.437A12.471,12.471,0,0,0,137.545,74.132Z'
              transform='translate(-102.297 0)'
              fill='rgba(184,200,251,0.8)'
            />
          </g>
        </g>
        <g transform='translate(981.423 856.254) rotate(90)'>
          <g transform='translate(102.297 0)'>
            <path
              d='M121.557,40.508,104.7.926c-.558-1.266-1.448-1.229-1.987.081a6.852,6.852,0,0,0,0,4.583l15.869,37.25L102.708,80.09a6.814,6.814,0,0,0,0,4.664c.549,1.288,1.438,1.288,1.987,0l16.862-39.582A6.814,6.814,0,0,0,121.557,40.508Z'
              transform='translate(-102.297 0)'
              fill='rgba(184,200,251,0.25)'
            />
          </g>
        </g>
        <g transform='translate(960.281 855.926) rotate(90)'>
          <g transform='translate(102.297 0)'>
            <path
              d='M112.088,20.594,103.516.471c-.284-.643-.736-.625-1.01.041a3.484,3.484,0,0,0,0,2.33l8.067,18.937-8.067,18.937a3.464,3.464,0,0,0,0,2.371c.279.655.731.655,1.01,0l8.572-20.122A3.464,3.464,0,0,0,112.088,20.594Z'
              transform='translate(-102.297 0)'
              fill='rgba(184,200,251,0.1)'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default NextSectionArrow;
