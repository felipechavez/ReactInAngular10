import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'react-root',
  templateUrl: './react.component.html'
})

export class ReactComponent implements OnInit {

  ngOnInit(): void {
    const scriptOne = document.createElement('script');
    scriptOne.src = './../assets/react-app/static/js/main.725f9350.js'; 
    document.body.appendChild(scriptOne);
    
    const scriptTwo = document.createElement('script');
    scriptTwo.src = './../assets/react-app/static/js/453.ad6eb26e.chunk.js';
    document.body.appendChild(scriptTwo);    
  }

}