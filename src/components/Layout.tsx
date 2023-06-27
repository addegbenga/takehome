import Sidebar from "./Sidebar";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
