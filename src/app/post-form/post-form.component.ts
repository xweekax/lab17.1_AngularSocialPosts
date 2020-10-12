import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  title = '';
  thought = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitPost = function(){
    this.submitted.emit(`${this.title} ${this.thought}`);
  }
}
