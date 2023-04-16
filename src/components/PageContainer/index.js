import Header from "../Header";

export default function PageContainer({ title, children, className }) {
  return (
    <>
      <Header />

      <main className="page">
        <h1>{title}</h1>
        <div className={className || ""}>{children}</div>
      </main>
    </>
  );
}
