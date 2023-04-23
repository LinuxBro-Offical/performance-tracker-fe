import { Component, OnInit } from '@angular/core';
declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    id: string;
    array:Nav[];
    subclass:string;
}

interface Nav {
    path: string;
    title: string;
    id:string;
    class:string;
}



export const ROUTES: RouteInfo[] = [
    { path: '/analytics',     subclass:'',title: 'Analytics',         icon:'categorize.svg',       class: '', id:'analytics',array:[] },
    { path: '/result-trees',         subclass:'',title: 'Result Trees',             icon:'tree.svg',    class: 'tree', id:'',array:[] },
    { path: '/delivarables',          subclass:'',title: 'Delivarable Management',              icon:'delivarable.svg',      class: '', id:'del',array:[] },
    { path: '/activities', subclass:'',title: 'Activity Implementaion',     icon:'activity.svg',    class: '', id:'act',array:[] },
    { path: '#fis',          subclass:'nc-icon nc-minimal-down',title: 'Fiscal Management',      icon:'fiscal.svg',  class: 'active', id:'fis',array:[{path:'/upgrade',title:'Fiscal Management',id:"fiscal2",class:"active"},
    {path:'/contract-nav',title:'Contract Management',id:"contact",class:"active"}] },
    { path: '/settings',         subclass:'',title: 'Settings',        icon:'settings.svg',    class: '', id:'settings',array:[] },
    // { path: '#',       subclass:'',title: 'Log Out',    icon:'exit.svg',  class: 'active-pro', id:'logout' ,array:[] },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        $(document).ready( function () {
            $('#fis').on('click',()=>{
                $('.collapse').toggleClass('show')
                $('.nc-icon').toggleClass('nc-minimal-up')
            })
        });
    }
    addActive(data){
        $('.sidebar-wrapper li').removeClass('active')
        data.currentTarget.setAttribute("class", "active");
    }
    addAct(data){
        if (data.id != 'fis'){
            $('.sidebar-wrapper li').removeClass('active')
            data.parentElement.setAttribute("class", "active");
        }
    }
}
