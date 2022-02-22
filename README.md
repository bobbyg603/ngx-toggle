# NgxToggle

A simple iOS style toggle switch for Angular projects.

## Installation

Install `@bobbyg603/ngx-toggle`:

```sh
npm i @bobbyg603/ngx-toggle
```

Import the `NgxToggle` module in each module that uses `<ngx-toggle>`:

[app.module.ts](https://github.com/bobbyg603/ngx-toggle/blob/81b7859846914832575a083b2741d88733e695d7/projects/ngx-toggle-example/src/app/app.module.ts#L14)
```ts
import { NgAnimatedCounterModule } from '@bugsplat/ng-animated-counter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAnimatedCounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

Add `<ngx-toggle>` to your component's template:

[app.component.ts](https://github.com/bobbyg603/ngx-toggle/blob/81b7859846914832575a083b2741d88733e695d7/projects/ngx-toggle-example/src/app/app.component.html#L12)
```ts
<ngx-toggle 
    id="toggle-example"
    [checked]="checked"
    [disabled]="false"
    (checkedChanged)="onCheckedChanged($event)">
</ngx-toggle>
```

Be sure to give each toggle a unique id. Failing to give each toggle a unique id will result in clicking one input toggling any inputs with a matching id.

## API

### Inputs
| Property | Type    | Description                   |
|----------|-------- |-------------------------------|
| id       | string  | unique identifier for input   |
| checked  | boolean | toggle is on (checked) or off |
| disabled | boolean | control is not interactable   |

### Outputs
| Property       | Type                    | Description                                       |
|----------------|-------------------------|---------------------------------------------------|
| checkedChanged | EventEmitter\<boolean\> | Emits new `checked` when control has been toggled |

## Attribution

The `ngx-toggle-example` layout was inspired by Benjamin King's [Pricing Cards](https://codepen.io/bballinben/pen/wyLjvm) codepen.