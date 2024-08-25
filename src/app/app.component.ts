import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { FirstpageComponent } from "./firstpage/firstpage.component";
import { BackgroundcardComponent } from "./backgroundcard/backgroundcard.component";
import { JoinComponent } from "./join/join.component";
import { MobImgComponent } from "./mob-img/mob-img.component";
import { GirlsImgComponent } from "./girls-img/girls-img.component";
import { DownloadAppComponent } from "./download-app/download-app.component";
import { MapComponent } from "./map/map.component";
import { ListCityComponent } from "./list-city/list-city.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SearchbarComponent, MainContentComponent, StatisticsComponent, FirstpageComponent, BackgroundcardComponent, JoinComponent, MobImgComponent, GirlsImgComponent, DownloadAppComponent, MapComponent, ListCityComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homepage-design';
}
