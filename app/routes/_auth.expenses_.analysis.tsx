import ExpenseStatistics from "../components/expenses/ExpenseStatistics";
import Chart from "../components/expenses/Chart";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function Analysis() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Analysis</h1>
      <ExpenseStatistics expenses={DUMMY_EXPENSES}/>
      <Chart expenses={DUMMY_EXPENSES} />
    </div>
  );
}
