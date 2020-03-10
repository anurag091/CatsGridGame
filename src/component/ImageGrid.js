import React, { Component } from "react";
import ResultGrid from "./ResultGrid";
import catsGridData, { catsImage } from "../utils";

export class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catsGrid: catsGridData
    };
    this.handeImageClick = this.handeImageClick.bind(this);
  }

  // fetch Image I didn't use background Image as It will have some
  //implication too

  getImage(catNumber) {
    return require(`../../img/cat_${catNumber}.png`);
  }
  /** A update 2D CatsGrid Object and append image ID to 
 it which is eventually used to fetch image path*/

  handeImageClick(event) {
    const { catsGrid } = this.state;
    const imageId = event.target.id;
    let isExit = false;
    for (let i = 0; i <= catsGrid.length - 1 && !isExit; i++) {
      for (var j = 0; j <= catsGrid[i].length - 1 && !isExit; j++) {
        if (catsGrid[i][j].imgSource === "") {
          catsGrid[i][j]["imgSource"] = imageId;
          this.setState({
            catsGrid: catsGrid
          });
          isExit = true;
        }
      }
    }
  }
  render() {
    const { catsGrid } = this.state;
    let count = 1;
    return (
      <div className='row'>
        {catsImage.map((column, index) => {
          return (
            <div key={index} className='column'>
              <img
                alt='catImage'
                onClick={this.handeImageClick}
                id={count}
                src={this.getImage(count++)}
              />
              <img
                alt='catImage'
                onClick={this.handeImageClick}
                id={count}
                src={this.getImage(count++)}
              />
              <img
                alt='catImage'
                onClick={this.handeImageClick}
                id={count}
                src={this.getImage(count++)}
              />
            </div>
          );
        })}
        <ResultGrid key={0} catsGrid={catsGrid} />
      </div>
    );
  }
}

export default ImageGrid;
