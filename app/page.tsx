import Link from "next/link";
import { Badge } from "@/shared/ui/shadcn/badge";
import { Button } from "@/shared/ui/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import { Separator } from "@/shared/ui/shadcn/separator";

export default function LandingPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">
          Ops And Code · Frontend Starter
        </Badge>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Estructura modular de Next.js, lista para crecer sin caos
        </h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          En este repo montamos una base reutilizable: routing limpio, módulos tipo
          “microfrontend lógico”, UI consistente con shadcn, docs dentro del repo y
          CI básico.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/dashboard">Ver demo (/dashboard)</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="https://github.com/hanush21/starter-repo-front-end" target="_blank" rel="noreferrer">
              Ver repo
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Qué vas a aprender aquí</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Una estructura de carpetas que separa <b>app</b> (wiring) de <b>modules</b>{" "}
              (dominio) y <b>shared</b> (reutilizable).
            </p>
            <Separator />
            <ul className="list-disc space-y-2 pl-5">
              <li>App Router con layouts y route groups</li>
              <li>Módulos escalables sin monorepo</li>
              <li>Componentes shadcn para UI limpia</li>
              <li>Docs + ADRs para decisiones</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cómo usar este starter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Clona el repo, renómbralo y empieza a crear módulos. El objetivo es que
              cualquier persona pueda entenderlo en minutos.
            </p>
            <Separator />
            <div className="rounded-xl border bg-card/50 p-4 font-mono text-sm text-foreground/90">
              <div>$ npm install</div>
              <div>$ npm run dev</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
