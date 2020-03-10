/** This is basic image object structure, 
 index value is only given to visualize object, 
 this is not used in this solution */

/** Note: I agree this data object must be drawn from some constant values of number of rows and colums, 
    that would be better approach to make this solution more flexible. I couldn't do it as I was already running out of time*/

export const catsGridData = [
  [
    { index: "01", imgSource: "" },
    { index: "02", imgSource: "" },
    { index: "03", imgSource: "" }
  ],

  [
    { index: "11", imgSource: "" },
    { index: "12", imgSource: "" },
    { index: "13", imgSource: "" }
  ],

  [
    { index: "21", imgSource: "" },
    { index: "22", imgSource: "" },
    { index: "23", imgSource: "" }
  ],

  [
    { index: "31", imgSource: "" },
    { index: "32", imgSource: "" },
    { index: "33", imgSource: "" }
  ]
];

export const catsImage = [
  { index: 0, imgSource: "" },
  { index: 1, imgSource: "" },
  { index: 3, imgSource: "" },
  { index: 4, imgSource: "" }
];

export const timeout = 10000;
export default catsGridData;
