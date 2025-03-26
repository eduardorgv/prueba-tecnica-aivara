import * as fs from "fs";
import type { Order, Status } from "./types/Order";

const path = "src/data/orders.json";

const orders: Order[] = JSON.parse(fs.readFileSync(path, "utf-8"));

// a. CANTIDAD de pedidos por estado/status.
const countOrdersByStatus = (): Record<Status, number> => {
  const statusCount: Record<Status, number> = {
    shipped: 0,
    pending: 0,
    canceled: 0,
    unknown: 0,
  };

  orders.forEach(({ status }) => {
    if (status) {
      statusCount[status]++;
    } else {
      statusCount.unknown++;
    }
  });

  return statusCount;
};

// b. Agrupar por cliente y contar cuántos pedidos ha hecho cada uno.
const countOrdersByCustomer = (): Record<string, number> => {
  const customerCount: Record<string, number> = {};

  orders.forEach(({ customer }) => {
    if (customerCount[customer]) {
      customerCount[customer]++;
    } else {
      customerCount[customer] = 1;
    }
  });

  return customerCount;
};

// c. Calcular promedio de items comprados por cliente.
const averageItemsByCustomer = (): Record<string, number> => {
  const customerItems: Record<string, number> = {};
  const customerCount: Record<string, number> = {};

  orders.forEach(({ customer, items }) => {
    if (customerItems[customer]) {
      customerItems[customer] += items.length;
      customerCount[customer]++;
    } else {
      customerItems[customer] = items.length;
      customerCount[customer] = 1;
    }
  });

  Object.keys(customerItems).forEach((customer) => {
    customerItems[customer] = customerItems[customer] / customerCount[customer];
  });

  return customerItems;
};

// c. Calcular el total de ingresos por estado del pedido (shipped, pending, canceled).
const totalIncomeByStatus = (): Record<Status, number> => {
  const totalIncome: Record<Status, number> = {
    shipped: 0,
    pending: 0,
    canceled: 0,
    unknown: 0,
  };

  orders.forEach(({ status, total }) => {
    if (status) {
      totalIncome[status] += total;
    } else {
      totalIncome.unknown += total;
    }
  });

  return totalIncome;
};

// e. Filtrar pedidos por un estado/status específico recibido como parámetro
const filterOrdersByStatus = (status: Status): Order[] => {
  // If status is unknown, return orders with status undefined
  if (status === "unknown") {
    return orders.filter((order) => !order.status);
  } else {
    return orders.filter((order) => order.status === status);
  }
};

// Responses
console.log("a. CANTIDAD de pedidos por estado/status:", countOrdersByStatus());
console.log(
  "b. Agrupar por cliente y contar cuántos pedidos ha hecho cada uno:",
  countOrdersByCustomer()
);
console.log(
  "c. Calcular promedio de items comprados por cliente:",
  averageItemsByCustomer()
);
console.log(
  "d. Calcular el total de ingresos por estado del pedido (shipped, pending, canceled):",
  totalIncomeByStatus()
);
console.log(
  "e. Filtrar pedidos por un estado/status específico recibido como parámetro:",
  filterOrdersByStatus("shipped")
);
