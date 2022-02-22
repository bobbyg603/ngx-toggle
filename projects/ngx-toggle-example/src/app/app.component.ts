import { Component } from '@angular/core';
import { faCheck, faPaperPlane, faPlane, faSpaceShuttle, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-toggle-example';

  faCheck = faCheck;
  faPaperPlane = faPaperPlane;
  faPlane = faPlane;
  faTimes = faTimes;
  faSpaceShuttle = faSpaceShuttle;

  checked = false;

  basicPriceParams = createNgAnimatedCounterParams(25, 25);
  standardPriceParams = createNgAnimatedCounterParams(50, 50);
  premiumPriceParams = createNgAnimatedCounterParams(100, 100);

  onCheckedChanged(checked: boolean): void {
    this.checked = checked;

    if (checked) {
      this.basicPriceParams = createNgAnimatedCounterParams(25, 12);
      this.standardPriceParams = createNgAnimatedCounterParams(50, 25);
      this.premiumPriceParams = createNgAnimatedCounterParams(100, 50);
    } else {
      this.basicPriceParams = createNgAnimatedCounterParams(12, 25);
      this.standardPriceParams = createNgAnimatedCounterParams(25, 50);
      this.premiumPriceParams = createNgAnimatedCounterParams(50, 100);
    }
  }
}

const createNgAnimatedCounterParams = (start: number, end: number) => ({
  start,
  end,
  interval: 5
});
