import AdminPanelLayout from "@/app/(dashboard)/components/admin-panel-layout";
import AuthMiddleware from "@/app/(auth)/components/auth-middleware";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
  <>
    <AuthMiddleware/>
    <AdminPanelLayout>
      {children}
    </AdminPanelLayout>
  </>
);
}
