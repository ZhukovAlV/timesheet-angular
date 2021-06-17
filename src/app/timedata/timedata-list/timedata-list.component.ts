import { Component, OnInit } from '@angular/core';
import { IterableTimeData } from 'src/app/client/timedata/timedata-client/models';
import { TimeDataControllerService } from 'src/app/client/timedata/timedata-client/services';

@Component({
  selector: 'app-timedata-list',
  templateUrl: './timedata-list.component.html',
  styleUrls: ['./timedata-list.component.css']
})
export class TimedataListComponent implements OnInit {
  timeDatas!: IterableTimeData;

  constructor(private timeDataService: TimeDataControllerService) { }

  ngOnInit(): void {
    this.timeDataService.findAllUsingGET.subscribe()({
      next: (timeDatas:any) => this.timeDatas = timeDatas
    });
  }

}
