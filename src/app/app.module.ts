import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AutocompleteLibModule } from "./modules/autocomplete-lib-module.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AutocompleteLibModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
