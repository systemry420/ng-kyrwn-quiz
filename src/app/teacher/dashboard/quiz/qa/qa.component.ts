import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {
  question
  @Output() nextEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  nextQuestion() {
    // emit question to parent
    this.nextEvent.emit({q: this.question})
    this.question = ''
  }
}
