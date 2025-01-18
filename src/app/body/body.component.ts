import { Component } from '@angular/core';
import { VideosComponent } from '../videos/videos.component';
import { MasagesComponent } from '../masages/masages.component';
@Component({
  selector: 'app-body',
  imports: [VideosComponent, VideosComponent,MasagesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
