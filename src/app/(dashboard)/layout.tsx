import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import AuthMiddleware from "@/components/auth/auth-middleware";

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
