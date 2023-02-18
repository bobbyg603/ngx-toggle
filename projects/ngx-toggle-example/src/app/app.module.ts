import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxToggleModule } from 'ngx-toggle';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxAnimatedCounterModule,
    NgxToggleModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'pricing',
        pathMatch: 'full'
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
