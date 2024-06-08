class Player3 {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  get score(): number {
    return this._score;
  }
}

class SuperPlayer extends Player3 {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999;
  }
}

const dog2 = new Player3("Elton", "Steele", 10);