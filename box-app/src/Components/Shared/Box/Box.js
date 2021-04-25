import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss'
import { RandomColor } from '../../../Services/Common';

const Box = ({text, onClick}) => {
  const [boxColor, setBoxColor] = useState(RandomColor());
  const boxLength = window.innerWidth / 12;

  const HandleClick = () => {
    setBoxColor(RandomColor());
    onClick();
  }
 
  useEffect(() => {
    setBoxColor(RandomColor());
  }, [text])
  
  return (
    <div onClick={HandleClick} className={styles.box} style={{ "backgroundColor": boxColor, width: `${boxLength}px`, height: `${boxLength}px` }}>
      <p>{text}</p>
    </div>
  );
}

Box.defaultProps = {
  text: "Box",
  onClick: () => {}
}
Box.propTypes = {
  text: PropTypes.any,
  onClick: PropTypes.func
}

export default React.memo(Box);