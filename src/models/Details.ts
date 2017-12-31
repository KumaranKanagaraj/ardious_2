// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class SlickQuiz {
  public readonly Target: Target;
  public readonly LinkQuestions: LinkQuestionsEntity[] | null;
  public static Parse(d: string): SlickQuiz {
    return SlickQuiz.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SlickQuiz {
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
    d.Target = Target.Create(d.Target, field + ".Target");
    checkArray(d.LinkQuestions, field + ".LinkQuestions");
    if (d.LinkQuestions) {
      for (let i = 0; i < d.LinkQuestions.length; i++) {
        d.LinkQuestions[i] = LinkQuestionsEntity.Create(d.LinkQuestions[i], field + ".LinkQuestions" + "[" + i + "]");
      }
    }
    if (d.LinkQuestions === undefined) {
      d.LinkQuestions = null;
    }
    return new SlickQuiz(d);
  }
  private constructor(d: any) {
    this.Target = d.Target;
    this.LinkQuestions = d.LinkQuestions;
  }
}

class Target {
  public readonly TargetQuestion: string;
  public readonly TargetResultCliche: string;
  public readonly FallenLevels: FallenLevels;
  public static Parse(d: string): Target {
    return Target.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Target {
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
    checkString(d.TargetQuestion, false, field + ".TargetQuestion");
    checkString(d.TargetResultCliche, false, field + ".TargetResultCliche");
    d.FallenLevels = FallenLevels.Create(d.FallenLevels, field + ".FallenLevels");
    return new Target(d);
  }
  private constructor(d: any) {
    this.TargetQuestion = d.TargetQuestion;
    this.TargetResultCliche = d.TargetResultCliche;
    this.FallenLevels = d.FallenLevels;
  }
}

class FallenLevels {
  public readonly level0: LevelInfo;
  public readonly level1: LevelInfo;
  public readonly level2: LevelInfo;
  public readonly level3: LevelInfo;
  public readonly level4: LevelInfo;
  public readonly level5: LevelInfo;
  public static Parse(d: string): FallenLevels {
    return FallenLevels.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): FallenLevels {
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
    d.level0 = LevelInfo.Create(d.level0, field + ".level0");
    d.level1 = LevelInfo.Create(d.level1, field + ".level1");
    d.level2 = LevelInfo.Create(d.level2, field + ".level2");
    d.level3 = LevelInfo.Create(d.level3, field + ".level3");
    d.level4 = LevelInfo.Create(d.level4, field + ".level4");
    d.level5 = LevelInfo.Create(d.level5, field + ".level5");
    return new FallenLevels(d);
  }
  private constructor(d: any) {
    this.level0 = d.level0;
    this.level1 = d.level1;
    this.level2 = d.level2;
    this.level3 = d.level3;
    this.level4 = d.level4;
    this.level5 = d.level5;
  }
}

class LevelInfo {
  public readonly title: string;
  public readonly descShort: string;
  public readonly descLong: string;
  public readonly image: string;
  public readonly rangeStart: number;
  public readonly rangeEnd: number;
  public static Parse(d: string): LevelInfo {
    return LevelInfo.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LevelInfo {
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
    checkString(d.title, false, field + ".title");
    checkString(d.descShort, false, field + ".descShort");
    checkString(d.descLong, false, field + ".descLong");
    checkString(d.image, false, field + ".image");
    checkNumber(d.rangeStart, false, field + ".rangeStart");
    checkNumber(d.rangeEnd, false, field + ".rangeEnd");
    return new LevelInfo(d);
  }
  private constructor(d: any) {
    this.title = d.title;
    this.descShort = d.descShort;
    this.descLong = d.descLong;
    this.image = d.image;
    this.rangeStart = d.rangeStart;
    this.rangeEnd = d.rangeEnd;
  }
}

class LinkQuestionsEntity {
  public readonly LinkQuestion: string;
  public readonly LinkAnswer: LinkAnswerEntity[] | null;
  public static Parse(d: string): LinkQuestionsEntity {
    return LinkQuestionsEntity.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LinkQuestionsEntity {
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
    checkString(d.LinkQuestion, false, field + ".LinkQuestion");
    checkArray(d.LinkAnswer, field + ".LinkAnswer");
    if (d.LinkAnswer) {
      for (let i = 0; i < d.LinkAnswer.length; i++) {
        d.LinkAnswer[i] = LinkAnswerEntity.Create(d.LinkAnswer[i], field + ".LinkAnswer" + "[" + i + "]");
      }
    }
    if (d.LinkAnswer === undefined) {
      d.LinkAnswer = null;
    }
    return new LinkQuestionsEntity(d);
  }
  private constructor(d: any) {
    this.LinkQuestion = d.LinkQuestion;
    this.LinkAnswer = d.LinkAnswer;
  }
}

class LinkAnswerEntity {
  public readonly option: string;
  public readonly correct: boolean;
  public readonly value: number;
  public readonly image: string;
  public static Parse(d: string): LinkAnswerEntity {
    return LinkAnswerEntity.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LinkAnswerEntity {
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
    return new LinkAnswerEntity(d);
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
