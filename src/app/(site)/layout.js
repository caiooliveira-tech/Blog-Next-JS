import Header from "@/app/(site)/_components/header";

export const metadata = {
  title: "Portfólio",
  description: "Confira os posts do meu blog",
};

export default function SiteLayout({children}) {
  return (
    <>
      <Header />
      <main className="pt-[4.625rem]">{children}</main>
    </>
  );
}
