import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent extends HTMLElement implements OnInit{

  ngOnInit(): void {
    const scriptOne = document.createElement('script');
    scriptOne.src = './../../assets/static/js/main.e9351f25.js'; 
    document.body.appendChild(scriptOne);
    
    const scriptTwo = document.createElement('script');
    scriptTwo.src = './../../assets/static/js/453.894ab83c.chunk.js';
    document.body.appendChild(scriptTwo);    
  }

}

window.customElements.define('counter-simple', CounterComponent);