import React, { useEffect, useRef } from 'react';
const {tableau} = window;

export const Forecast =()=> {
    
  var viz;
  const ref = useRef(null);
  const url =  "https://public.tableau.com/views/forcast_16816303631590/Sheet2?:";
  const initViz = ()=>{
    if(viz){
        viz.dispose();
    }
    viz = new tableau.Viz(ref.current, url, {width:"100%", height: "90vh" })
    console.log('initializes');

    //var workbook = viz.getWorkbook();

// Get a reference to the active worksheet
//var worksheet = workbook.getActiveWorksheet();

// Retrieve information about the selected marks in the view
// worksheet.getSelectedMarksAsync().then(function(marks) {
//   // Use the data in the marks array to update your website
//   console.log(marks);
//   });
}
  useEffect(initViz, [])
  return (
    <div ref={ref}> </div>
  );
}
