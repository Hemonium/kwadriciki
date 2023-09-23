import { Component, inject } from '@angular/core';
import { PrzeslijService } from '../przeslij.service';
import { Kolor } from '../kolorek';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})

export class OutputComponent {
  kolor: Kolor = {
    kolorWartosc: 'red',
    otoczony: false
  };
  test(item: string){
    return item.split(' ')
  };
}
