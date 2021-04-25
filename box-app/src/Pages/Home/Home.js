import React, { useState } from 'react';
import Box from '../../Components/Shared/Box/Box';
import { GetBoundaryElementIndex } from '../../Services/Common';
import styles from './Home.module.scss';

const boxMatrix = [[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4], [5, 6, 7, 8]];
const boundaries = GetBoundaryElementIndex(boxMatrix, 4, 4);

const Home = props => {
  const [matrix, setMatrix] = useState(boxMatrix);

  const boxClickHandler = (boxIndex, parentIndex) => () => {
    let updateMatrix = matrix;

    // Get Surrounding Index Element
    let indices = GetRandonSurroundingElementIndex(boxIndex, parentIndex);
    if (indices === undefined) return;
    updateMatrix[indices[0]][indices[1]] = Math.floor(Math.random() * 10);
    
    setMatrix(prevState => {
      return [...updateMatrix];
    });
  }

  const GetRandonSurroundingElementIndex = (boxIndex, parentIndex) => {
    let surroundingIndex = [];
    if (parentIndex - 1 > 0) {
      surroundingIndex.push([parentIndex - 1, boxIndex]);
    }
    if (parentIndex + 1 < matrix.length) {
      surroundingIndex.push([parentIndex + 1, boxIndex]);
    }
    if (boxIndex + 1 < matrix[parentIndex].length) {
      surroundingIndex.push([parentIndex, boxIndex + 1]);
    }
    if (boxIndex - 1 > 0) {
      surroundingIndex.push([parentIndex, boxIndex - 1]);
    }
    
    let randomIndex = Math.floor(Math.random() * surroundingIndex.length - 1);

    let checkNotBoundaryIndex = boundaries.findIndex(val => {
      return val[0] === randomIndex[0] && val[1] === randomIndex[1];
    })
    if (checkNotBoundaryIndex !== -1) {
      console.log('recursion');
      GetRandonSurroundingElementIndex(boxIndex, parentIndex);
      return;
    }
    if (surroundingIndex[randomIndex] === undefined) {
      console.log('recursion');
      GetRandonSurroundingElementIndex(boxIndex, parentIndex);
      return;
    }
    return surroundingIndex[randomIndex];
  }

  return (
    <div className={styles.container1}>      
      {matrix.map((item, index) => {
        return (
          <div className={styles.container} key={index}>
            {item.map((box, boxIndex) => {
              return <Box text={box} key={boxIndex} onClick={boxClickHandler(boxIndex, index)} />
            })}
          </div>
        )
      })}
    </div>
  );
}

Home.defaultProps = {
}
Home.propTypes = {
}

export default React.memo(Home);