import { Component, OnInit } from '@angular/core';
import{TitleService} from '../title.service'
@Component({
  selector: 'change-title',
  templateUrl: './change-title.component.html',
  styles: []
})
export class ChangeTitleComponent implements OnInit {

  private title:string
  constructor(private titleService:TitleService) { }

  ngOnInit() {
    this.titleService.title.subscribe((newTitle:string)=>{
      this.title=newTitle
    })
  }

  changeTitle(e)
  {
    const newTitle=e.target.value
    this.titleService.title.next(newTitle)
    //Title with observer and observavble
    //this.titleService.titleObserver.next(newTitle)
  }
}
