/**
 * Es algo que va cambiando como: latitud en un mapa
 * El bitcoin cambia cada segundo
 */
import { Observable } from "rxjs";

export const getNumbers = new Observable((subscriber) => {
    //We emit values:
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
})

export const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });