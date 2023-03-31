import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fakeClients } from '../helper';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private fakeClients = fakeClients;

  getClients(): Observable<Client[]> {
    return of(this.fakeClients);
  }

  addClient(client: Client): Observable<Client[]> {
    const findIndex = this.fakeClients.findIndex(x => x.Id === client.Id);
    !findIndex ? this.fakeClients[findIndex] = client : this.fakeClients.unshift(client);
    return of(this.fakeClients);
  }

  deleteClient(client: Client): Observable<Client[]> {
    const findIndex = this.fakeClients.findIndex(x => x.Id === client.Id);
    this.fakeClients.splice(findIndex, 1);
    return of(this.fakeClients);
  }
}