import { redirect } from "next/navigation";

// Map de slug antiguo de modelo → slug de serie
const MODEL_TO_SERIES: Record<string, string> = {
  e2: "e",
  e3: "e",
  k1: "k",
  k2: "k",
  k3: "k",
  s2: "t", // S descatalogada, redirect a T (UV)
  t1: "t",
  t2: "t",
  t3: "t",
  w1: "w",
  w2: "w",
  wf: "w",
  fb: "fb",
  g: "g",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ModeloLegacyPage({ params }: PageProps) {
  const { slug } = await params;
  const seriesSlug = MODEL_TO_SERIES[slug] ?? null;
  if (seriesSlug) {
    redirect(`/series/${seriesSlug}`);
  }
  redirect("/series");
}
