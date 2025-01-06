import { CardWithForm } from "@/components/CardWithForm";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: bookings } = await supabase.from("bookings").select();

  console.log("Sup", bookings)
  return (
    <div className="w-full h-dvh border-2 border-red-500 flex flex-col p-12 gap-4">
      <h1 className="font-bold underline-offset-2 underline">
        Bukauto
      </h1>
      <CardWithForm />
    </div>
  );
}
