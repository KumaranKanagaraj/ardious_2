export interface ISlickQuiz {
  Target: ITarget;
  LinkQuestions?: (ILinkQuestionsEntity)[] | null;
}
export interface ITarget {
  TargetQuestion: string;
  TargetResultCliche: string;
  FallenLevels: IFallenLevels;
}
export interface IFallenLevels {
  level0: ILevelInfo;
  level1: ILevelInfo;
  level2: ILevelInfo;
  level3: ILevelInfo;
  level4: ILevelInfo;
  level5: ILevelInfo;
}
export interface ILevelInfo {
  title: string;
  descShort: string;
  descLong: string;
  image: string;
  rangeStart: number;
  rangeEnd: number;
}
export interface ILinkQuestionsEntity {
  LinkQuestion: string;
  LinkAnswer?: (ILinkAnswerEntity)[] | null;
}
export interface ILinkAnswerEntity {
  option: string;
  correct: boolean;
  value: number;
  image: string;
}
