import dynamic from "next/dynamic";

const DynamicGuia = dynamic(() => import('../components/Guia'));

export default function Home() {
  return (
    <>
      <DynamicGuia />
    </>
  );
}
