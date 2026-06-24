export default function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((exp, index) => (
        <li key={index}>
          {exp.title} - ₹{exp.amount}
        </li>
      ))}
    </ul>
  );
}
