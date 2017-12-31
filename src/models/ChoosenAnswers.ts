// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class ChoosenAnswers {
  public readonly ChoosenAnswers: ChoosenAnswersEntityProxy[] | null;
  public static Parse(d: string): ChoosenAnswers {
    return ChoosenAnswers.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ChoosenAnswers {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.ChoosenAnswers, field + ".ChoosenAnswers");
    if (d.ChoosenAnswers) {
      for (let i = 0; i < d.ChoosenAnswers.length; i++) {
        d.ChoosenAnswers[i] = ChoosenAnswersEntityProxy.Create(d.ChoosenAnswers[i], field + ".ChoosenAnswers" + "[" + i + "]");
      }
    }
    if (d.ChoosenAnswers === undefined) {
      d.ChoosenAnswers = null;
    }
    return new ChoosenAnswers(d);
  }
  private constructor(d: any) {
    this.ChoosenAnswers = d.ChoosenAnswers;
  }
}

export class ChoosenAnswersEntityProxy {
  public readonly Question: string;
  public readonly ChoosenAnswer: ChoosenAnswerProxy;
  public readonly IsAnswered: boolean;
  public static Parse(d: string): ChoosenAnswersEntityProxy {
    return ChoosenAnswersEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ChoosenAnswersEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.Question, false, field + ".Question");
    d.ChoosenAnswer = ChoosenAnswerProxy.Create(d.ChoosenAnswer, field + ".ChoosenAnswer");
    checkBoolean(d.IsAnswered, false, field + ".IsAnswered");
    return new ChoosenAnswersEntityProxy(d);
  }
  private constructor(d: any) {
    this.Question = d.Question;
    this.ChoosenAnswer = d.ChoosenAnswer;
    this.IsAnswered = d.IsAnswered;
  }
}

export class ChoosenAnswerProxy {
  public readonly option: string;
  public readonly correct: boolean;
  public readonly value: number;
  public readonly image: string;
  public static Parse(d: string): ChoosenAnswerProxy {
    return ChoosenAnswerProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ChoosenAnswerProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.option, false, field + ".option");
    checkBoolean(d.correct, false, field + ".correct");
    checkNumber(d.value, false, field + ".value");
    checkString(d.image, false, field + ".image");
    return new ChoosenAnswerProxy(d);
  }
  private constructor(d: any) {
    this.option = d.option;
    this.correct = d.correct;
    this.value = d.value;
    this.image = d.image;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "boolean", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
