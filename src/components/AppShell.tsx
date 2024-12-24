import Navbar from "./Navbar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="lg:h-16 h-20"></div>
      <Navbar />
      {children}
    </main>
  );
};

export default AppShell;
