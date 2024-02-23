import { redirect, useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { addExpenses } from "~/data/expenses.server";
import type { Expense } from "~/types/expenses";
import { z } from "zod";

export default function Add() { 
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

const Expense = z.object({
  id: z.number(),
  title: z.string(),
  amount: z.number(),
  date: z.date(),
});

export async function action({request, params}: {request: Request; params: Record<string, string>}) {
  try {
    const formData = await request.formData();
    const expenseData = Expense.parse(Object.fromEntries(formData));

    addExpenses(expenseData);
    return redirect("/expenses");
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(`Validation failed: ${error}`);
    } else {
      console.log(`Unexpected error: ${error}`);
    }
  }
}

