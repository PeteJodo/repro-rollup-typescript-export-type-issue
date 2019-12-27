export interface IExample {
    isExample(): boolean;
}

export class MyExample implements IExample {
  isExample() {
    return true;
  }
}
