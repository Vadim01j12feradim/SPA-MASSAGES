import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './index/index.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,IndexComponent],
  templateUrl: './app.component.html',
  // templateUrl: './app.component.html',
  // template: `<h1>Hi izmael</h1>`,
  // styles:['*{background-color:red}']
  // styleUrl: './app.component.css'
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'SPA';
}

