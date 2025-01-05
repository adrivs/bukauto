import { CardWithForm } from "@/components/CardWithForm";

export default function Home() {
  return (
    <div className="w-full h-dvh border-2 border-red-500 flex flex-col p-12 gap-4">
      <h1 className="font-bold underline-offset-2 underline">
        Bukauto
      </h1>
      <CardWithForm />
    </div>
  );
}
