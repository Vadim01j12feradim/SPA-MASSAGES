import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialHeaderComponent } from './social-header/social-header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MasagesComponent } from './masages/masages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SocialHeaderComponent, BodyComponent,FooterComponent,MasagesComponent],
  templateUrl: './app.component.html',
  // templateUrl: './app.component.html',
  // template: `<h1>Hi izmael</h1>`,
  // styles:['*{background-color:red}']
  // styleUrl: './app.component.css'
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'SPA';
}

