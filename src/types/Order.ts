export interface Order {
  id:       number;
  customer: string;
  total:    number;
  items:    string[];
  status?:  Status;
};

export type Status = "shipped" | "pending" | "canceled" | "unknown";  // unknown añadido por los pedidos sin status