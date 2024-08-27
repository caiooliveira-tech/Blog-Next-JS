import dynamic from "next/dynamic";

const CriarPostModal = dynamic(
  () => import("./_components/criar-post-modal"),
  {ssr: false}
);

export default function Posts() {
  return (
    <>
      <section className="container flex items-center justify-between w-full mt-7">
        <h1 className="text-white mb-0">Posts</h1>
        <CriarPostModal />
      </section>
      <section className="container w-full mt-7"></section>
    </>
  );
}
