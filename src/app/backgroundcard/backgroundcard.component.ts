import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from "../header/header.component";
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { StatisticsComponent } from '../statistics/statistics.component';


@Component({
  selector: 'app-backgroundcard',
  standalone: true,
  imports: [
    MatCardModule,
    HeaderComponent,
    SearchbarComponent,
    StatisticsComponent
],
  templateUrl: './backgroundcard.component.html',
  styleUrl: './backgroundcard.component.css'
})
export class BackgroundcardComponent {

}
