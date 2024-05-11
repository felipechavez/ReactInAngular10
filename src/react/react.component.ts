import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'react-root',
  templateUrl: './react.component.html'
})

export class ReactComponent implements OnInit{

  ngOnInit() : void {
    const scriptOne = document.createElement('script');
    scriptOne.src = './../assets/static/js/main.7676775a.js'; 
    document.body.appendChild(scriptOne);
    
    const scriptTwo = document.createElement('script');
    scriptTwo.src = './../assets/static/js/453.6c1e6fa8.chunk.js';
    document.body.appendChild(scriptTwo);        
  }

}