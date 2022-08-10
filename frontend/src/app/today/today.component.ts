import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
 
  
  constructor() { }

  ngOnInit(): void {
  }

  card: any = [1,2,3,3,3,3]
  
}
