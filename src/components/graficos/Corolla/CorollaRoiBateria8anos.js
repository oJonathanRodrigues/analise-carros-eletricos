import React from "react";
import { Chart } from "react-google-charts";

export var data = [
  ["Ano", "Corolla Comum", "Corolla Híbrido"],
  [0, 178890, 193590],
  [1, 187491.42, 199183.56],
  [2, 196092.83, 204777.12],
  [3, 204694.25, 210370.67],
  [4, 213295.66, 215964.23],
  [5, 221897.08, 221557.79],
  [6, 230498.49, 227151.35],
  [7, 239099.91, 232744.91],
  [8, 247701.32, 265338.47],
  [9, 256302.74, 270932.02],
  [10, 264904.15, 276525.58],
  [11, 273505.57, 282119.14],
  [12, 282106.98, 287712.70],
  [13, 290708.40, 293306.26],
  [14, 299309.81, 298899.82],
  [15, 307911.23, 304493.37],
  [16, 316512.64, 337086.93],
  [17, 325114.06, 342680.49],
  [18, 333715.47, 348274.05],
  [19, 342316.89, 353867.61],
  [20, 350918.30, 359461.17],
];

export const options = {
  title: "Fluxo de caixa considerando 8 anos de vida útil para bateria",
  hAxis: {
    title: "Anos",
    format:'',
  },
  vAxis: {
    title: "Somatório dos valores",
    format: 'currency',
    format:'R$ #,###',
  },
  series: {
    1: { curveType: "function" },
  },
  animation:{
    duration: 1000,
    easing: 'out',
    "startup": true
  },
  backgroundColor: '#00000',
};



export default function CorollaBateria8anos(){
          return (
            <div className={`flex justify-center items-center bg-white`}>
            <Chart
            chartType="LineChart"
            width="90%"
            height="500px"
            data={data}
            options={options}
          />
          </div>
          )
        }