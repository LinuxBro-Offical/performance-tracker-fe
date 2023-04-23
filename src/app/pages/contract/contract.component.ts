import { Component, OnInit } from '@angular/core';
import * as dt from 'datatables.net'
declare var $: any;

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( function () {
      $('#contractTable').DataTable( {
        paging: true,
        searching: false,
        "autoWidth": false,
        "lengthChange": true,
        "sDom": 'Rfrtlip',
        "bInfo" : false,
        "ordering": false,
        "pageLength": 20,
        "lengthMenu": [ 20, 30, 50, 75, 100 ],
        "oLanguage": {
          "oPaginate": {
            "sPrevious": `<i class="nc-icon nc-minimal-left font-weight-bold"></i>`,
            "sNext": `<i class="nc-icon nc-minimal-right font-weight-bold"></i>`
          }
        },
        "language": {
          "lengthMenu": "Show _MENU_"
        }
    });

    $('#contractorsTable').DataTable( {
      paging: true,
      searching: false,
      "autoWidth": false,
      "lengthChange": true,
      "sDom": 'Rfrtlip',
      "bInfo" : false,
      "ordering": false,
      "pageLength": 20,
      "lengthMenu": [ 20, 30, 50, 75, 100 ],
      "oLanguage": {
        "oPaginate": {
          "sPrevious": `<i class="nc-icon nc-minimal-left font-weight-bold"></i>`,
          "sNext": `<i class="nc-icon nc-minimal-right font-weight-bold"></i>`
        }
      },
      "language": {
        "lengthMenu": "Show _MENU_"
      }
  });

  } );
    $("#user-nav-tabs li").on('click', function(e) {
      var targetLink = $(e.currentTarget.children[0]).attr("class").slice(1);
      var content_map = {
          c1  : "#content1",
          c2  : "#content2",
          c3  : "#content3",
          c4  : "#content4",
          c5  : "#content5"
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