import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {
  ngOnInit() {}

  @Output() nextEvent = new EventEmitter();

  data = {
    question: '',
    option1: '',
    option2: '',
    option3: ''
  }

  nextQuestion() {
    this.nextEvent.emit({
      q: this.data.question,
      o1: this.data.option1,
      o2: this.data.option2,
      o3: this.data.option3,
    });

    this.data = {
      question: '',
      option1: '',
      option2: '',
      option3: ''
    }
  }

}
