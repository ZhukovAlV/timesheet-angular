import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IterableTimeData } from 'src/app/client/timedata/timedata-client/models';
import { TimeDataControllerService } from 'src/app/client/timedata/timedata-client/services';

@Component({
  selector: 'app-timedata-list',
  templateUrl: './timedata-list.component.html',
  styleUrls: ['./timedata-list.component.css']
})
export class TimedataListComponent implements OnInit {
  timeDatas!: IterableTimeData;
  userId!: number;

  constructor(private timeDataService:TimeDataControllerService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = Number(params.get('userId'));
    })
    
    this.timeDataService.findByUserIdUsingGET(this.userId).subscribe({
      next: timeDatas => this.timeDatas = timeDatas
    });
  }

}
