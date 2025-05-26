import BudgetDiagram from "../components/BudgetDiagram";
const Budget = () => {
  return (
    <>
      <div className="bg-gray-300 w-full min-h-screen px-4 py-6">
        <div className="max-w-10xl mx-auto">
          <h1>Budgets</h1>
          <BudgetDiagram />
        </div>
      </div>
    </>
  );
};

export default Budget;
