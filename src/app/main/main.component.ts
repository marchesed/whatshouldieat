import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  output: String;
  profaneOutput: String;
  submitted: boolean = false;
  isProfane: boolean = false;
  options: Array<String> = [
    "Italian",
    "American",
    "Chinese",
    "Indian",
    "Mexican"
  ]
  profaneOptions: Array<String> = [
    "Eat some fucking Italian food",
    "Eat some fucking American food",
    "Eat some fucking Chinese food",
    "Eat some fucking Indian food",
    "Eat some fucking Mexican food"
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
    this.profaneOutput = this.profaneOptions[Math.floor(rand/this.numberOfOptions)]
  }
  handleSwitchChange(){
    this.isProfane = !this.isProfane;
    console.log(this.isProfane)
  }

}
