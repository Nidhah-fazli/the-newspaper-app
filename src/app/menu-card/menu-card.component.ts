import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.less']
})
export class MenuCardComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() isOpen: boolean;
  @ViewChild('menu') menu: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.isOpen) {
      console.log(this.menu.nativeElement.style);
      this.menu.nativeElement.style = "display: block; height:210px;";
    }else {
      this.menu.nativeElement.style = "display: none; height:0px;";
    }

  }

  ngAfterViewInit() {

  }
}
