import { Component, OnInit, Input } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.createChart()
  }

  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart(): void {
    Chart.register(...registerables);

    const data = {
      labels: ['Votos'],
      datasets: [
        {
          label: 'Andrés Manuel López Obrador',
          backgroundColor: 'rgb(181,38,30,255)',
          borderColor: 'rgb(181,38,30,255)',
          data: [30113483],
        },
        {
          label: 'Ricardo Anaya Cortés',
          backgroundColor: 'rgb(5,51,141,255)',
          borderColor: 'rgb(5,51,141,255)',
          data: [12610120],
        },
        {
          label: 'José Antonio Meade Kuribreña',
          backgroundColor: 'rgb(0,145,80,255)',
          borderColor: 'rgb(0,145,80,255)',
          data: [9289853],
        },
        {
          label: 'Jaime Rodríguez Calderón',
          backgroundColor: 'rgb(146,184,21,255)',
          borderColor: 'rgb(146,184,21,255)',
          data: [2961732],
        }
      ]
    };

    const data2 = {
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
          data: [
            25186577,3396805,1530101,
            9996514,1602715,1010891,
            7677180,1051480,561193,
            2961732
          ],
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

    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: options
    }

    const config2: ChartConfiguration = {
      type: 'pie',
      data: data2,
      options: options
    }

    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem
    const chartItem2: ChartItem = document.getElementById('my-chart2') as ChartItem

    new Chart(chartItem, config)
    new Chart(chartItem2, config2)
  }
}
