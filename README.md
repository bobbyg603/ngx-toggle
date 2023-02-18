# NgxToggle
![cd](https://github.com/bobbyg603/ngx-toggle/actions/workflows/cd.yml/badge.svg)

A simple iOS style toggle switch for Angular projects.  

## 🏗️ Installation

Install `@bobbyg603/ngx-toggle`:

```sh
npm i @bobbyg603/ngx-toggle
```

Import the `NgxToggleModule` module in each module that uses `<ngx-toggle>`:

[app.module.ts](https://github.com/bobbyg603/ngx-toggle/blob/main/projects/ngx-toggle-example/src/app/app.module.ts)

```ts
import { NgxToggleModule } from '@bobbyg603/ngx-toggle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 🧑‍💻 Usage

Add `<ngx-toggle>` to your component's template:

[pricing.component.html](https://github.com/bobbyg603/ngx-toggle/blob/34b5da55ec9e5adf80bfa196cddb380c9d95314d/projects/ngx-toggle-example/src/app/pricing/pricing.component.html#L4-L6)

```html
<ngx-toggle 
  id="toggle-example"
  [(checked)]="checked"
  [disabled]="false"
  (checkedChange)="onCheckedChange($event)">
</ngx-toggle>
```

Be sure to give each toggle a unique `id`. Failing to give each toggle a unique id will result in clicking one input toggling any inputs with a matching id.

You can also use `<ngx-toggle>` as a [FormControl](https://angular.io/api/forms/FormControl):

[checkout.component.html](https://github.com/bobbyg603/ngx-toggle/blob/1781fc109e1879c64c24bd82d249539911ec7587/projects/ngx-toggle-example/src/app/checkout/checkout.component.html#L71)

```html
<form [formGroup]="formGroup">
  <ngx-toggle class="ms-auto" formControlName="saveForNextTime"></ngx-toggle>
</form>
```

[checkout.component.ts](https://github.com/bobbyg603/ngx-toggle/blob/1781fc109e1879c64c24bd82d249539911ec7587/projects/ngx-toggle-example/src/app/checkout/checkout.component.ts#L10-L19)
```ts
formGroup = new FormGroup({
  saveForNextTime: new FormControl(false)
});
```


## 🧩 API

### Inputs
| Property | Type    | Description                   |
|----------|-------- |-------------------------------|
| id       | string  | unique identifier for input   |
| checked  | boolean | toggle is on (checked) or off |
| disabled | boolean | control is not interactable   |

### Outputs
| Property       | Type                    | Description                                             |
|----------------|-------------------------|---------------------------------------------------------|
| checkedChange  | EventEmitter\<boolean\> | Emits new `checked` value when control has been toggled |

## 🤝 Attribution

The `ngx-toggle-example` layout was inspired by Benjamin King's [Pricing Cards](https://codepen.io/bballinben/pen/wyLjvm) codepen.
