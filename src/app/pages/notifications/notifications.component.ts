import { Component, OnInit  } from '@angular/core';
import * as dt from 'datatables.net'
declare var $: any;


@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent  implements OnInit {
  ngOnInit() {
      $(document).ready( function () {
          $('#activityTable').DataTable( {
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
  }
}