import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TimeData } from 'src/app/client/timedata/timedata-client/models';

@Component({
  selector: 'app-timedata-list',
  templateUrl: './timedata-list.component.html',
  styleUrls: ['./timedata-list.component.css']
})
export class TimedataListComponent implements OnInit {
  form!: FormGroup;
  timeData!: TimeData;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl(''),
      country: new FormControl('ru'),
      answer: new FormControl('no'),
    });

  }

  onSubmit() {
    console.log('Submited!',this.form);
  } 


}
