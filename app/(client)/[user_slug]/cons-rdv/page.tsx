import TableConsRdv from "@/components/cons-rdv/table";
export default async function Page({
  params,
}: {
  params: Promise<{ user_slug: string }>;
}) {
  const { user_slug } = await params;
  return (
    <div className=" text-on-background min-h-screen">
      {/* <!-- Layout Wrapper --> */}
      {/* <!-- SideNavBar - Rendered based on JSON instruction --> */}

      {/* <!-- Main Content Area --> */}
      <main className="flex flex-col gap-5 p-8 md:p-12 max-w-7xl mx-auto w-full">
        <TableConsRdv slug={user_slug} />
      </main>
    </div>
  );
}
