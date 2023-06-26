import React from "react";
import { Chart } from "react-google-charts";

export var data = [
  ["Ano", "Kwid Comum", "Kwid elétrico"],
  [0, 58900, 146990],
  [1, 64940, 148040],
  [2, 72419, 149596],
  [3, 78369, 150646],
  [4, 85848, 152202],
  [5, 91798, 153252],
  [6, 99277, 154808],
  [7, 105227, 155858],
  [8, 112706, 192683.88],
  [9, 118656, 193733.88],
  [10, 126135, 195289.88],
  [11, 132085, 196339.88],
  [12, 139564, 197895.88],
  [13, 145514, 198945.88],
  [14, 152993, 200501.88],
  [15, 158943, 201551.88],
  [16, 166422, 238377.75],
  [17, 172372, 239427.75],
  [18, 179851, 240983.75],
  [19, 185801, 242033.75],
  [20, 193280, 243589.75],
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



export default function KwidBateria8anos(){
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