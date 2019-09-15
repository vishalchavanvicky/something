import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'something';
  opened=false;
  constructor(private router:Router)  { }

  ngOnInit(){
    this.goto("");
  }

  goto(value){
      this.router.navigate([value])
  }


}
