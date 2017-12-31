// Stores the currently-being-typechecked object for error messages.
import { ISlickQuestions} from '../models/models';
let obj: any = null;
export class SlickQuestions implements ISlickQuestions {
  public readonly Questions: QuestionsEntityProxy[] | null;
  public static Parse(d: string): SlickQuestions {
    return SlickQuestions.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SlickQuestions {
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
    checkArray(d.Questions, field + ".Questions");
    if (d.Questions) {
      for (let i = 0; i < d.Questions.length; i++) {
        d.Questions[i] = QuestionsEntityProxy.Create(d.Questions[i], field + ".Questions" + "[" + i + "]");
      }
    }
    if (d.Questions === undefined) {
      d.Questions = null;
    }
    return new SlickQuestions(d);
  }
  private constructor(d: any) {
    this.Questions = d.Questions;
  }
}

export class QuestionsEntityProxy {
  public readonly id: string;
  public readonly q_question: string;
  public readonly q_description: string;
  public readonly q_img: null;
  public readonly category: string;
  public readonly created: string;
  public readonly modified: string;
  public readonly status: string;
  public static Parse(d: string): QuestionsEntityProxy {
    return QuestionsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): QuestionsEntityProxy {
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
    checkString(d.id, false, field + ".id");
    checkString(d.q_question, false, field + ".q_question");
    checkString(d.q_description, false, field + ".q_description");
    checkNull(d.q_img, field + ".q_img");
    if (d.q_img === undefined) {
      d.q_img = null;
    }
    checkString(d.category, false, field + ".category");
    checkString(d.created, false, field + ".created");
    checkString(d.modified, false, field + ".modified");
    checkString(d.status, false, field + ".status");
    return new QuestionsEntityProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.q_question = d.q_question;
    this.q_description = d.q_description;
    this.q_img = d.q_img;
    this.category = d.category;
    this.created = d.created;
    this.modified = d.modified;
    this.status = d.status;
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
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function checkNull(d: any, field: string): void {
  if (d !== null && d !== undefined) {
    errorHelper(field, d, "null or undefined", false);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
