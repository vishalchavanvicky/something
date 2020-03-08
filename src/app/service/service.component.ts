import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("I m here")
  }

  dragEnter(event){
    // document.getElementById("target").style.backgroundColor="rgb(240, 205, 162)";
    // console.log(event)
    event.target.style.backgroundColor = "rgb(240, 205, 162)";
  }

  dragLeave(event){
    // event.preventDefault();
    event.target.style.backgroundColor="rgb(247, 224, 195)"
  }

  onDrop(event){
    event.preventDefault();
    let file;
    file = event.dataTransfer.files
  }

  dragover(event){
    event.preventDefault();
    // console.log(event);
  }


}
