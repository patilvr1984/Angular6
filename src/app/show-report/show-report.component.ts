import {Component, OnInit, ViewChild} from '@angular/core';
import {TestReport} from "../model/testReport";
import {TestReportService} from "../service/testReportService";
import {IgxColumnComponent, IgxGridComponent, IgxStringFilteringOperand} from "igniteui-angular";
import {encode} from "punycode";
import {PapaParseService} from 'ngx-papaparse';
@Component({
  selector: 'app-show-report',
  templateUrl: './show-report.component.html',
  styleUrls: ['./show-report.component.css']
})
export class ShowReportComponent implements OnInit{
  public col: IgxColumnComponent;
  public showGrid: boolean = false;
  public pWidth: string;
  public nWidth: string;
  testReportsDev2: TestReport[] = new Array();
  testReportsDev3: TestReport[] = new Array();
  testReportsFat3: TestReport[] = new Array();
  testReportsFat4: TestReport[] = new Array();
  constructor(private testReportService: TestReportService, private papa: PapaParseService) { }
  public records: any[] = [];

  public onResize(event){
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
  }

 public ngOnInit(): void {
    this.fetchReport("DEV2");
    this.fetchReport("DEV3");
    this.fetchReport("FAT3");
    this.fetchReport("FAT4");
  }

  public fetchReport(env: string):void{
      this.testReportService.getTestReports(env).subscribe(data =>{
      if(env === "DEV2"){
        this.testReportsDev2 = data;
      }else if(env === "DEV3"){
        this.testReportsDev3 = data;
      }else if(env === "FAT3"){
        this.testReportsFat3 = data;
      }else if(env === "FAT4"){
        this.testReportsFat4 = data;
      }
    });
  }


}
