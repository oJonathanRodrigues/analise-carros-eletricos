import React from "react";
import { Chart } from "react-google-charts";

export var data = [
  ["Ano", "Kwid Comum", "Kwid elétrico"],
  [0, 58990, 146990],
  [1, 64940, 148040],
  [2, 72419, 149596],
  [3, 78369, 150646],
  [4, 85848, 152202],
  [5, 91798, 153252],
  [6, 99277, 154808],
  [7, 105227, 155858],
  [8, 112706, 157414],
  [9, 118656, 158464],
  [10, 126135, 160020],
  [11, 132085, 161070],
  [12, 139564, 197895],
  [13, 145514, 198945.88],
  [14, 152993, 200501.88],
  [15, 158943, 201551.88],
  [16, 166422, 203107.88],
  [17, 172372, 204157.88],
  [18, 179851, 205713.88],
  [19, 185801, 206763.88],
  [20, 193280, 208319.88],
  [21, 193280, 209369.88],
  [22, 206709, 210925.88],
  [23, 212659, 211975.88],
  [24, 220138, 248801.75],
  [25, 226088, 249851.75],
];

export const options = {
  title: "Fluxo de caixa considerando 12 anos de vida útil para bateria",
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



export default function KwidBateria12anos(){
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