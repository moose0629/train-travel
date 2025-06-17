import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public randomFloat(min: number, max: number): number {
    return Math.random() * (max - min + 1);
  }

  public randomInt(min: number, max: number): number {
    return Math.floor(this.randomFloat(min, max)) + min;
  }

  public randomMember<T>(array: T[]) {
    const index = this.randomInt(0, array.length - 1);
    return array[index];
  }
}