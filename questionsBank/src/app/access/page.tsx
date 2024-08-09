import Link from "next/link";

export default function Acess() {
  return (
    <div className="flex flex-col h-screen container mx-auto mt-4 items-center justify-center bg-black">
      <main className="flex flex-colitems-center justify-center px-12 py-10 rounded-lg">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl text-slate-400 font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Get Access To Our Quizzes
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl text-white">
              Discover your strengths and weaknesses through our engaging
              quizzes. Submit your own questions to challenge others and expand
              your understanding.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/access/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-8 text-xl font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Register
              </Link>
              <Link
                href="/access/token"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-8 text-xl font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Token
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
