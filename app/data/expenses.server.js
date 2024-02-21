import { type } from "os";
import { prisma } from "./database.server";

export async function addExpenses(expenseData: Expense) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: expenseData.amount,
        date: expenseData.date,
      },
    });
  } catch (error) {
    console.log(`Error adding expense: ${error}`);
    throw new Error(`Error adding expense: ${error}`);
  }
}

type Expense = {
  id: number;
  title: string;
  amount: number;
  date: Date;
};