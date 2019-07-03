import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  output: String;
  submitted: boolean = false;
  options: Array<String> = [
    "Italian",
    "American",
    "Chinese",
    "Indian",
    "Mexican"
  ]
  numberOfOptions:number;

  constructor() { }

  ngOnInit() {
    this.numberOfOptions = 100/(this.options.length);
  }
  handleClick(){
    var rand = Math.random()*100
    console.log(Math.floor(rand/this.numberOfOptions))
    this.output = this.options[Math.floor(rand/this.numberOfOptions)]
  }

}
