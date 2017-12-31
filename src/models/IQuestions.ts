export interface ISlickQuestions {
  Questions?: (QuestionsEntity)[] | null;
}
export interface QuestionsEntity {
  id: string;
  q_question: string;
  q_description: string;
  q_img?: null;
  category: string;
  created: string;
  modified: string;
  status: string;
}
