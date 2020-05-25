import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor() { }

  blogs=[]

  ngOnInit(): void {
  }

  addBlog(title,content){
    let blog= {"title":title.value,"content":content.value};//let is used to define the variable within the method. here title and content acts as key value pairs
    if(localStorage.getItem("blogs")){
      this.blogs=JSON.parse(localStorage.getItem("blogs"))// JSON.parse is used to change string to json array. here this.blogs is the JSON array
    }
    this.blogs.push(blog)
    localStorage.setItem("blogs",JSON.stringify(this.blogs)) // we can store only strings in localstorage so we use "stingify"
    title.value="";
    content.value="";
    alert("Blog Submited");
  }
}
//1-> Fetch existing blog from local storage
//2-> Append the data from the existing to the blogs array
//3-> Save in the Local Storage