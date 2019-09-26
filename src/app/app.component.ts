import { Component } from '@angular/core';
import {TitleService} from './title.service'
import {HttpClient} from '@angular/common/http'

export interface Post
{
  id:Number
  userId:Number
  body:string
  title:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
  , providers:[TitleService]
})
export class AppComponent {
  title : string;

  posts:Post[]=[]

  constructor(private titleService: TitleService, private http:HttpClient){}

  ngOnInit()
  {
    this.titleService.title.subscribe((value:string)=>{
      this.title=value
    })
    
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response=>{
      this.posts=response
    })
  }
}
