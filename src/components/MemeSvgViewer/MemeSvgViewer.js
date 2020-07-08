import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeSvgViewer.module.scss';

const MemeSvgViewer = (props) => {
  console.log(props,props.store.getState());
  return (
  <svg className={styles.MemeSvgViewer} data-testid="MemeSvgViewer"
  viewBox="0 0 100 100" >
    <image xlinkHref={`/img/${props.store.getState().selectedImg.url}`} x="0"  y="0" height="100" width="100"/>
    {props.store.getState().texts.map((e,i)=><text x={e.x} fontSize={e.fontSize} textAnchor="middle" fill="WHITE" y={e.y} key={`memetext-${i}`}>{e.value}</text>
)}
{props.store.getState().temporaryText.value.length>0 && (<text x={props.store.getState().temporaryText.x} fontSize={props.store.getState().temporaryText.fontSize} textAnchor="middle" fontStyle="italic" fill="lightcyan" y={props.store.getState().temporaryText.y} >{props.store.getState().temporaryText.value}</text>
) }
  </svg>
);
}
MemeSvgViewer.propTypes = {
};

MemeSvgViewer.defaultProps = {};

export default MemeSvgViewer;
