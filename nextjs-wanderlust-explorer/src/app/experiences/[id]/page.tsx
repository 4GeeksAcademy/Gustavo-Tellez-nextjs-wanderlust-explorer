import { notFound } from "next/navigation";
import { experiences, type Experience } from "@/data/experiences";
import ExperienceDetailContent from "@/components/ExperienceDetailContent";

export const instant = false;

export function generateStaticParams() {
  return experiences.map((experience) => ({
    id: String(experience.id),
  }));
}

export default async function ExperienceDetailPage({
  params,
}: PageProps<"/experiences/[id]">) {
  const { id } = await params;
  const experienceId = Number(id);
  const experience = experiences.find((e) => e.id === experienceId);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetailContent experience={experience as Experience} />;
}