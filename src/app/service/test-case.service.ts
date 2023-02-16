import { Observable } from 'rxjs';
import { TestCase } from './../model/TestCase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const host = 'http://localhost:8081/pfe/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class TestCaseService {

  constructor( private http: HttpClient ) { }


  getAllTestCases(): Observable<TestCase[]>{
    return this.http.get<TestCase[]>( host + 'testcase/testCases');
  }

  updateTestCase( id: String , testCase: TestCase): Observable<TestCase>{

    return this.http.put< TestCase >( host +  'testcase/modiferTest/' + id , testCase);
}

deleteTestCase(id: number): Observable<TestCase>{

    return this.http.delete<TestCase>( host + 'testcase/supprimerTest/' +  id);
}

addTestCase ( testCase:  TestCase): Observable<any> {
  return this.http.post(host +  'testcase/ajouterTest/' ,testCase);
}

getTestCasesByProjet(idProjet: number): Observable<TestCase[]>{

  return this.http.get<TestCase[]>( host + 'testcase/testCasesByProjet/'+ idProjet);
}
getTestCaseById(id: String ): Observable<TestCase[]>{
  return this.http.get<TestCase[]>( host + 'testcase/testCaseById/' + id);

}

runTestCase ( testCase:  TestCase): Observable<any> {
  return this.http.post(host +  'testcase/runTestCase/' ,{testCasePath:testCase.testCasePath,testCaseName:testCase.testCaseName});
}
runScheduleTestCase( data: any): Observable<any> {
  return this.http.post(host +  'testcase/scheduleTest/' ,data);
}
}
