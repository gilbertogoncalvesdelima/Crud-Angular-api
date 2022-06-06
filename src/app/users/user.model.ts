export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
// Objeto de resposta, aonde trás o get de muitos registros

export interface ResponseUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[]; // Esta data e nosso array de usuarios
}
