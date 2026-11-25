import Link from "next/link";

export default function ExperienceNotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-2xl font-semibold text-[#07111E]">
        Experience not found
      </h1>
      <p className="mt-2 text-[#475569]">
        The experience you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/experiences"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#07111E] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1E293B]"
      >
        Browse Experiences
      </Link>
    </div>
  );
}