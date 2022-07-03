import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart(): void {
    Chart.register(...registerables);

    const data7 = {
      labels: [
        'PAN', 
        'PRI', 
        'PRD', 
        'PT', 
        'VERDE', 
        'CIUDADANO', 
        'ALIANZA', 
        'PASC'
      ],
      datasets: [
        {
          label: 'Partidos Politicos',
          backgroundColor: [
            'rgb(1,48,143,255)',
            'rgb(0,147,61,255)',
            'rgb(255,204,0,255)',
            'rgb(219,32,23,255)',
            'rgb(79,184,69,255)',
            'rgb(255,132,0,255)',
            'rgb(0,165,173,255)',
            'rgb(48,40,123,255)',
          ],
          data: [
            9996514+15000284+12732630,
            7677180+5580864+16354938,
            1602715+11122251+4958803,
            3396805+2597905+4958803,
            1051480+2803654+4672558,
            1010891+2128671+0,
            561193+1146085+401804,
            1128850
          ],
        }
      ]
    };

    const data8 = {
      labels: [
        'Morena','Partido del Trabajo','Partido Encuentro Social',
        'Partido Acción Nacional','Partido de la Revolución Democrática','Movimiento Ciudadano',
        'Partido Revolucionario Institucional','Partido Verde Ecologista de México','Nueva Alianza',
        'Candidato independiente'
      ],
      datasets: [
        {
          label: 'Movimiento Ciudadano',
          backgroundColor: [
            'rgb(181,38,30,255)','rgb(181,38,30,255)','rgb(181,38,30,255)',
            'rgb(5,51,141,255)','rgb(5,51,141,255)','rgb(5,51,141,255)',
            'rgb(0,145,80,255)','rgb(0,145,80,255)','rgb(0,145,80,255)',
            'rgb(146,184,21,255)'
          ],
          data: [25186577,3396805,1530101,9996514,1602715,1010891,7677180,1051480,561193,2961732],
        },
      ],
      hoverOffset: 4
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        }
      }
    }

    const config7: ChartConfiguration = {
      type: 'polarArea',
      data: data7,
      options: options
    }

    const config8: ChartConfiguration = {
      type: 'pie',
      data: data8,
      options: options
    }

    const chartItem7: ChartItem = document.getElementById('my-chart7') as ChartItem
    const chartItem8: ChartItem = document.getElementById('my-chart8') as ChartItem

    new Chart(chartItem7, config7)
    new Chart(chartItem8, config8)
  } 
}