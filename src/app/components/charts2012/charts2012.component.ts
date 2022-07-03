import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'

@Component({
  selector: 'app-charts2012',
  templateUrl: './charts2012.component.html',
  styleUrls: ['./charts2012.component.scss']
})
export class Charts2012Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart(): void {
    Chart.register(...registerables);

    const data3 = {
      labels: ['Votos'],
      datasets: [
        {
          label: 'Enrique Peña Nieto',
          backgroundColor: 'rgb(0,129,0,255)',
          borderColor: 'rgb(0,129,0,255)',
          data: [19158592],
        },
        {
          label: 'Andrés Manuel López Obrador',
          backgroundColor: 'rgb(254,214,0,255)',
          borderColor: 'rgb(254,214,0,255)',
          data: [15848827],
        },
        {
          label: 'Josefina Vázquez Mota',
          backgroundColor: 'rgb(11,87,162,255)',
          borderColor: 'rgb(11,87,162,255)',
          data: [12732630],
        },
        {
          label: 'Gabriel Quadri de la Torre',
          backgroundColor: 'rgb(76,139,135,255)',
          borderColor: 'rgb(76,139,135,255)',
          data: [1146085],
        }
      ]
    };

    const data4 = {
      labels: [
        'Partido Revolucionario Institucional','Partido Verde Ecologista de México',
        'Partido de la Revolución Democrática','Partido del Trabajo','Movimiento Ciudadano',
        'Partido Acción Nacional',
        'Partido Nueva Alianza',
      ],
      datasets: [
        {
          label: 'Movimiento Ciudadano',
          backgroundColor: [
            'rgb(0,129,0,255)','rgb(0,129,0,255)',
            'rgb(254,214,0,255)','rgb(254,214,0,255)','rgb(254,214,0,255)',
            'rgb(11,87,162,255)',
            'rgb(76,139,135,255)'
          ],
          data: [
            16354938,2803654,
            11122251,2597905,2128671,
            12732630,
            1146085
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

    const config3: ChartConfiguration = {
      type: 'bar',
      data: data3,
      options: options
    }

    const config4: ChartConfiguration = {
      type: 'pie',
      data: data4,
      options: options
    }

    const chartItem3: ChartItem = document.getElementById('my-chart3') as ChartItem
    const chartItem4: ChartItem = document.getElementById('my-chart4') as ChartItem

    new Chart(chartItem3, config3)
    new Chart(chartItem4, config4)
  }
}
