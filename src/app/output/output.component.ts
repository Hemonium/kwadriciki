import { Component,Input, inject } from '@angular/core';
import { PrzeslijService } from '../przeslij.service';
import { Kolor } from '../kolorek';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})

export class OutputComponent {
  kolorWartosc?: string
  test(item:string){
      return item.split(' ')
    
  };
}
