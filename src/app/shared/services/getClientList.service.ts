import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({ providedIn: 'root' })
export class GetClientListService {
	constructor(private httpClient: HttpClient) { }

	getAll(): Observable<Client[]> {
		return this.httpClient.get<Client[]>('assets/data/client.json');
	}

	addClient(client: Client): Observable<Client> {
		return this.httpClient.post<Client>('assets/data/client.json', { body: JSON.stringify(client) });
	}

	getTest(): Observable<any[]> {
		return this.httpClient.get<any[]>('https://my-json-server.typicode.com/oleinikvadim/goodgym/clients');
	}
}
