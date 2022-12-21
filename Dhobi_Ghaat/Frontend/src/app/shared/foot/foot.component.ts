import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css'],
  providers: [DatePipe]
})
export class FootComponent implements OnInit {

  myDate:any = new Date();
  constructor(private datePipe : DatePipe) {
      this.myDate=this.datePipe.transform(this.myDate);

   }

  ngOnInit() {
  }

}
