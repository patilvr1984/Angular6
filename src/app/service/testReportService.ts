import {TestReport} from "../model/testReport";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TestReportService{
    constructor(private httpClient: HttpClient){}
    baseUrl: string = "http://localhost:8080/reports";

    public getTestReports(env: string){
      return this.httpClient.get<TestReport[]>(this.baseUrl+"/"+env);
    }
}
