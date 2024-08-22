export interface Transaction {
  map?: any;
  id: String;
  text?: string;
  amount?: number;
  userId?: string;
  createdAt?: Date;
}

export type transactionProps = {
  id: string;
  amount: number;
  text: string;
  userId?: string;
};
