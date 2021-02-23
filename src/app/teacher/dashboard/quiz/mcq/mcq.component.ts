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
    this.nextEvent.emit(this.data);

    this.data = {
      question: '',
      option1: '',
      option2: '',
      option3: ''
    }
  }

}
