import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
// import * as $ from 'jquery';
import * as dt from 'datatables.net'


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  public chartBudget;
  public reportChart;

    ngOnInit(){
      $(document).ready( function () {
        $('#myTable').DataTable( {
          paging: false,
          searching: false
      });
      } );
      this.chartColor = "#FFFFFF";
      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");

      this.chartHours = new Chart(this.ctx, {
        type: 'bar',
        options: {
          plugins:{
            legend:{
              display:false
            }
          },
          scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                type: 'linear',
            },
            x:{
                stacked: true,
                beginAtZero: true
            }
          },
        },
        data: {
          labels: ["Priority 1","Priority 2","Priority 3","Priority 4","Priority 5","Priority 6","Priority 7","Priority 8","Priority 9", "Priority 10"],
          datasets: [{
            label: 'Appropiated',
            backgroundColor: "#FFE700",
            data: [12, 59, 5, 56, 58,12, 59, 15, 23, 60],
            barThickness:17,
            borderRadius:15,
          }, {
            label: 'Realsed',
            backgroundColor: "#FF9900",
            data: [12, 19, 5, 16, 18,12, 19, 25, 11,10],
            barThickness:17,
            borderRadius:15
          }, {
            label: 'Utalized',
            backgroundColor: "#FF6C40",
            data: [12, 20, 35, 20, 20, 12, 19, 12, 14,20],
            barThickness:17,
            borderRadius:15,
          }],
        },
      });
      // bar chart end

      this.canvas = document.getElementById("stackbudget");
      this.ctx = this.canvas.getContext("2d");

      this.chartHours = new Chart(this.ctx, {
        type: 'bar',
        options: {
          plugins:{
            legend:{
              display:false
            }
          },
          scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                type: 'linear',
            },
            x:{
                stacked: true,
                beginAtZero: true
            }
          },
        },
        data: {
          labels: ["Budget 1","Budget 2","Budget 3","Budget 4","Budget 5","Budget 6","Budget 7","Budget 8","Budget 9", "Budget 10"],
          datasets: [{
            label: 'Appropiated',
            backgroundColor: "#FFE700",
            data: [22, 29, 45, 56, 58,12, 29, 15, 23, 30],
            barThickness:17,
            borderRadius:15,
          }, {
            label: 'Realsed',
            backgroundColor: "#FF9900",
            data: [12, 19, 5, 16, 18,12, 19, 25, 11,10],
            barThickness:17,
            borderRadius:15
          }, {
            label: 'Utalized',
            backgroundColor: "#FF6C40",
            data: [12, 20, 35, 20, 20, 12, 19, 12, 14,20],
            barThickness:17,
            borderRadius:15,
          }],
        },
      });
      // bar chart end

      const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 120, 120],
          backgroundColor: [
            '#017D34',
            '#19C45F',
            '#96CCAC'
          ],
          hoverOffset: 4
        }]
      };
      const config = {
        type: 'doughnut',
        data: data,
      };
      this.canvas = document.getElementById("chartbudget");
      this.ctx = this.canvas.getContext("2d");

      this.chartBudget = new Chart(this.ctx, {
        type: 'doughnut',
        data: data,
        options: {
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: 'rgb(255, 99, 132)'
                  }
              }
          }
      }
      });

      this.canvas = document.getElementById("reportChart");
      this.ctx = this.canvas.getContext("2d");

      this.reportChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
          labels: [
            'Not reported',
            'reported',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [120, 80],
            weight:1,
            backgroundColor: [
              '#E4F6EE',
              '#19C45F'
            ],
            hoverOffset: 4
          }]
        },
        options: {
          plugins: {
              legend: {
                  display: true,
                  position:'bottom',
                  labels: {
                      color: '#505D6F',
                      usePointStyle:true,
                  }
              }
          },
          cutout: 90
      }
      });
      $("#user-nav-tabs li").on('click', function(e) {
        var targetLink = $(e.currentTarget.children[0]).attr("class").slice(1);
        var content_map = {
            c1  : "#content1",
            c2  : "#content2",
            c3  : "#content3"
        }
        $(e.currentTarget).siblings().removeClass("active");
        $.each(content_map, function(hash, elid) {
            if (hash == targetLink) {
                $(elid).show();
                $(e.currentTarget).addClass("active");
            } else {
                $(elid).hide();
            }
          });
      });

    }
}
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);


