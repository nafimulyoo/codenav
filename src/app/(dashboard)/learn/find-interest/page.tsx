import Link from "next/link";

import Home from "@/app/(dashboard)/home/components/home";
import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/app/(dashboard)/components/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import Survey from "@/app/(dashboard)/learn/find-interest/components/survey";

export default function HomePage() {
  return (
    <ContentLayout title="Home">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/home">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbLink asChild>
              <Link href="/home">Learning</Link>
            </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Interest Finder</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Survey />
    </ContentLayout>
  );
}
