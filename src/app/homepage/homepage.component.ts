import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  blogs=[]

  ngOnInit(): void {
    this.blogs = JSON.parse(localStorage.getItem("blogs"));
  }

  removeBlog(blog){
    let index = this.blogs.indexOf(blog);
    this.blogs.splice(index,1);
    localStorage.setItem("blogs",JSON.stringify(this.blogs));
    alert("Blog has been Deleted");
  }
}
