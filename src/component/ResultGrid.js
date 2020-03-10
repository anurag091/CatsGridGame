import React from "react";
import swal from "sweetalert";
import _ from "lodash";
import { timeout } from "../utils";
let index = 1;

const ResultGrid = ({ catsGrid }) => {
  let catsCollection = [];
  const getImage = catNumber => {
    return catNumber ? require(`../../img/cat_${catNumber}.png`) : null;
  };

  const checkResult = () => {
    let isValid = true;
    for (var i = 0; i <= catsGrid.length - 1 && isValid; i++) {
      // chcking 2D array length and matching whether assigned values and unique values are same or not
      let sources = _.map(catsGrid[i], "imgSource");
      let unique = _.uniq(sources);
      isValid = _.size(sources) === _.size(unique);
    }

    const alertText = isValid ? "YOU WIN" : "YOU LOSE";

    // Used Sweet because it is asynchronous. Normal javascript alert will have a bad UX here because of synchronous nature

    swal(alertText, {
      buttons: true,
      timer: timeout
    });
  };

  catsGrid.forEach((data, colIndex) => {
    data.forEach((imgData, rowIndex) => {
      catsCollection.push(
        <div key={index++}>
          {imgData.imgSource ? (
            <img
              id={colIndex + `:` + rowIndex}
              alt='gridImage'
              src={getImage(imgData.imgSource)}
            />
          ) : null}
        </div>
      );

      /**I understand no of row and column check should not be written
      like this,must come from constant. All the probable no. of row and column must be drawn from constant */

      if (imgData.imgSource && colIndex === 3 && rowIndex === 2) {
        checkResult();
      }
    });
  });
  return (
    <div className='catsGrid'>
      <h1>Cats Grid</h1>
      <div className='grid-container'>{catsCollection}</div>
    </div>
  );
};

export default ResultGrid;
