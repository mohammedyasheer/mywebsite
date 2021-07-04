import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSM(form: NgForm) {
    const value = form.value;
    this.http.post('https://mywebsite-14812-default-rtdb.firebaseio.com/posts.json',value).subscribe(resData => {
    });
    form.reset();
  } 
  
}
