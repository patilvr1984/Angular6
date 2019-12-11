import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IgxGridModule, IgxTabsModule} from 'igniteui-angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowReportComponent } from './show-report/show-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TestReportService} from "./service/testReportService";
import {HttpClientModule} from "@angular/common/http";
import {PapaParseModule} from "ngx-papaparse";

@NgModule({
  declarations: [
    AppComponent,
    ShowReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxTabsModule,
    HttpClientModule,
    IgxGridModule,
    PapaParseModule
  ],
  providers: [TestReportService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
