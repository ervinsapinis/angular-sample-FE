export interface CatFact{
  createdAt: string;
  deleted: boolean;
  source: string;
  status: any;
  text: string;
  type: string;
  updatedAt: string;
  used: boolean;
  user: string;
  '_id': string;
}

interface CatFactStatus{
  verified: boolean
}
