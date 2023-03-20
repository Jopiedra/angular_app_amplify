import { Component } from '@angular/core';

import { Settings } from 'src/assets/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_app_amplify';

  variable1 = process.env['NG_TEST_01'];
  variable2 = process.env['NG_TEST_02'];
  variable3 = process.env['NG_TEST_03'];

}
