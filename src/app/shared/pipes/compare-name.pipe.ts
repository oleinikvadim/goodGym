import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client.model';

@Pipe({
  name: 'compareName'
})
export class CompareName implements PipeTransform {
  transform(client: Client): string {
    return `${client.FirstName} ${client.LastName}`;
  }
}