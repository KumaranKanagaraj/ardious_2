export interface IChoosenAnswers {
    ChoosenAnswers?: (IChoosenAnswersEntity)[] | null;
  }
  export interface IChoosenAnswersEntity {
    Question: string;
    ChoosenAnswer: IChoosenAnswer;
    IsAnswered: boolean;
  }
  export interface IChoosenAnswer {
    option: string;
    correct: boolean;
    value: number;
    image: string;
  }
  