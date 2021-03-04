import { Component } from '@angular/core';

import SwiperCore, { Autoplay, EffectFade, Swiper } from 'swiper/core';

SwiperCore.use([EffectFade, Autoplay]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba-swipper';
}
