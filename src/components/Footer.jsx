export default function Footer({ totalTodos, completedTodos }) {
  return (
    <>
      <div className="footer">
        <span>Total Todo's:{totalTodos}</span>
        <span>Completed Todo's:{completedTodos}</span>
      </div>
    </>
  );
}
