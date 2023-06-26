import Area from "@/pageComponents/comum/Area";
import React from "react";
import { Chart } from "react-google-charts";


export default function CarrosEmplacadosMundo() {
  const data = [
    ["Modelo", "Quantidade", { role: "style" }],
    ["Tesla Model Y", 267200, "blue"],
    ["Corolla", 256400, "blue"],
    ["Hilux",214700, "blue"],
    ["RAV4", 211000, "color: blue"],
    ["CAMRY", 166200, "color: blue"], 
  ];

  const options = {
    title: "CARROS EMPLACADOS NO MUNDO EM 2023",
    animation:{
      duration: 1000,
      easing: 'out',
      "startup": true
    },
    backgroundColor: '#00000',
  };

  return (
    <Area>
    <div className={`flex justify-center items-center bg-white`}>
    <Chart chartType="ColumnChart" 
    width="80%" 
    height="400px" 
    options={options}
    data={data} />
    </div>
    <div className={`flex justify-center items-center bg-white text-black`}> Fonte: Jato Dynamics</div>
    </Area>
  );
}