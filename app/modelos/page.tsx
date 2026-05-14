import { redirect } from "next/navigation";

export default function ModelosLegacyPage() {
  // Redirect permanente: /modelos → /series
  redirect("/series");
}
