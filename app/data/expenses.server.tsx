import { PrismaClient } from "@prisma/client";
import { Expense } from "~/types/expenses";

const prisma: PrismaClient = new PrismaClient();


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
