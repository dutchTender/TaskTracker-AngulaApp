import { Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonColor: string;
  @Output() btnClickedEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onBtnClicked(): void{
    this.btnClickedEmitter.emit();
  }

}
