import { Component, OnInit } from '@angular/core';
import * as dt from 'datatables.net'
declare var $: any;

@Component({
    selector: 'upgrade-cmp',
    moduleId: module.id,
    templateUrl: 'upgrade.component.html'
})

export class UpgradeComponent implements OnInit{
    ngOnInit(){
        $(document).ready( function () {
            $('.btn').on('click', function() {
                $('.file').trigger('click');
              });
              $('.file').on('change', function() {
                var fileName = $(this)[0].files[0].name;
                $('#file-name').val(fileName);
            });

            $('#next').on('click',()=>{
                $('.content1').addClass('d-none')
                $('.content2').removeClass('d-none')
                $('#next').addClass('d-none')
                $('#next1').removeClass('d-none')
                $('#num2').addClass('active')
            })

            $('#next1').on('click',()=>{
                $('.content2').addClass('d-none')
                $('.content3').removeClass('d-none')
                $('#next1').addClass('d-none')
                $('#next2').removeClass('d-none')
                $('#num3').addClass('active')
            })
            $('#ministryTable').DataTable( {
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
        });

        $("#user-nav-tabs li").on('click', function(e) {
            var targetLink = $(e.currentTarget.children[0]).attr("class").slice(1);
            var content_map = {
                c1  : "#content1",
                c2  : "#content2",
                c3  : "#content3",
                c4  : "#content4",
                c5  : "#content5",
                c6  : "#content6"
            }
            $(e.currentTarget).siblings().removeClass("active");
            $.each(content_map, function(hash, elid) {
                if (hash == targetLink) {
                    $(elid).show();
                    $(e.currentTarget).addClass("active");
                }
                else {
                    $(elid).hide();
                    $('#content3').show()
                }
            });
        });

        $("#fiscal-nav-tabs li").on('click', function(e) {
            var targetLink = $(e.currentTarget.children[0]).attr("class").slice(1);
            var content_map = {
                c1  : "#content1",
                c2  : "#content2",
                c3  : "#content3",
                c4  : "#content4",
                c5  : "#content5",
                c6  : "#content6"
            }
            $(e.currentTarget).siblings().removeClass("active");
            $.each(content_map, function(hash, elid) {
                if (hash == targetLink) {
                    $(elid).show();
                    $("#content2").show()
                    $(e.currentTarget).addClass("active");
                } else {
                    $(elid).hide();
                }
            });
        });
    }
}
