import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  fileName :any;
  filesPush : File[] = [];
  selectedfiles :[];

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
    let maxFiles = 10;
    this.selectedfiles = event.dataTransfer.files;
    if(this.filesPush.length + this.selectedfiles.length <= maxFiles){
      for(let i=0; i<this.selectedfiles.length; i++){
        this.filesPush.push(this.selectedfiles[i]);
      }
    }else
    alert("Nikal Files")

  }

  dragover(event){
    event.preventDefault();
    // console.log(event);
  }


}
