import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fakeClinets } from '../helper';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private fakeClinets = fakeClinets;

  getClients(): Observable<Client[]> {
    return of(this.fakeClinets);
  }

  addClient(client: Client): Observable<Client[]> {
    const findIndex = this.fakeClinets.findIndex(x => x.Id === client.Id);
    !findIndex ? this.fakeClinets[findIndex] = client : this.fakeClinets.unshift(client);
    return of(this.fakeClinets);
  }

  deleteClient(client: Client): Observable<Client[]> {
    const findIndex = this.fakeClinets.findIndex(x => x.Id === client.Id);
    this.fakeClinets.splice(findIndex, 1);
    return of(this.fakeClinets);
  }
}