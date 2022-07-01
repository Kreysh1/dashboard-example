import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'

@Component({
  selector: 'app-charts2006',
  templateUrl: './charts2006.component.html',
  styleUrls: ['./charts2006.component.scss']
})
export class Charts2006Component implements OnInit {

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart(): void {
    Chart.register(...registerables);

    const data5 = {
      labels: ['Votos'],
      datasets: [
        {
          label: 'Felipe Calderón Hinojosa',
          backgroundColor: 'rgb(6,51,142,255)',
          borderColor: 'rgb(6,51,142,255)',
          data: [15000284],
        },
        {
          label: 'Andrés Manuel López Obrador',
          backgroundColor: 'rgb(255,214,0,255)',
          borderColor: 'rgb(255,214,0,255)',
          data: [14756350],
        },
        {
          label: 'Roberto Madrazo Pintado',
          backgroundColor: 'rgb(0,145,80,255)',
          borderColor: 'rgb(0,145,80,255)',
          data: [9301441],
        },
        {
          label: 'Patricia Mercado Castro',
          backgroundColor: 'rgb(201,47,69,255)',
          borderColor: 'rgb(201,47,69,255)',
          data: [1128850],
        },
        {
          label: 'Roberto Campa Cifrián',
          backgroundColor: 'rgb(130,186,173,255)',
          borderColor: 'rgb(130,186,173,255)',
          data: [401804],
        },
      ]
    };

    const data6 = {
      labels: [
        'Partido Acción Nacional',
        'Coalición Por el Bien de Todos',
        'Alianza por México',
        'Partido Alternativa Socialdemócrata y Campesina',
        'Partido Nueva Alianza'
      ],
      datasets: [
        {
          label: 'Movimiento Ciudadano',
          backgroundColor: [
            'rgb(6,51,142,255)',
            'rgb(255,214,0,255)',
            'rgb(0,145,80,255)',
            'rgb(201,47,69,255)',
            'rgb(130,186,173,255)',
          ],
          data: [15000284,14756350,9301441,1128850,401804],
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

    const config5: ChartConfiguration = {
      type: 'bar',
      data: data5,
      options: options
    }

    const config6: ChartConfiguration = {
      type: 'pie',
      data: data6,
      options: options
    }

    const chartItem5: ChartItem = document.getElementById('my-chart5') as ChartItem
    const chartItem6: ChartItem = document.getElementById('my-chart6') as ChartItem

    new Chart(chartItem5, config5)
    new Chart(chartItem6, config6)
  }
}
