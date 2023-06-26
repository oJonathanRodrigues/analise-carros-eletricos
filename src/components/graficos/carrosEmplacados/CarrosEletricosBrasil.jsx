import Area from "@/pageComponents/comum/Area";
import React from "react";
import { Chart } from "react-google-charts";


export default function CarrosEletricosBrasil() {
  
  const data = [
    ["Modelo", "Quantidade", { role: "style" }],
    ["2015", 3119, "blue"],
    ["2016", 4571, "blue"],
    ["2017",7737, "blue"],
    ["2018", 11862, "color: blue"],
    ["2019", 24604, "color: blue"], 
    ["2020", 43980, "blue"],
    ["2021", 80153, "color: blue"],
    ["2022", 120566, "color: blue"], 
  ];

  const options = {
    title: "CARROS EMPLACADOS NO BRASIL",
    animation:{
      duration: 1005,
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
    <div className={`flex justify-center items-center bg-white text-black`}> Fonte: NeoCharge</div>
    </Area>
  );
}