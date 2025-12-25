import Link from "next/link";
import { Badge } from "@/shared/ui/shadcn/badge";
import { Button } from "@/shared/ui/shadcn/button";
import { Card } from "@/shared/ui/shadcn/card";
import { Separator } from "@/shared/ui/shadcn/separator";

export default function ShellLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-primary/10 text-primary">
              {"</>"}
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Ops And Code</div>
              <div className="text-xs text-muted-foreground">
                Shell layout · route group (shell)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-12">
        <aside className="md:col-span-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Navegación</div>
              <Badge variant="secondary">demo</Badge>
            </div>

            <Separator className="my-4" />

            <nav className="space-y-2">
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/settings">Settings</Link>
              </Button>

              <Button variant="ghost" className="w-full justify-start" disabled>
                /settings (próximo)
              </Button>

              <Button variant="ghost" className="w-full justify-start" disabled>
                /marketing (próximo)
              </Button>
            </nav>

            <Separator className="my-4" />

            <p className="text-sm text-muted-foreground">
              Este shell demuestra cómo agrupar rutas bajo un layout común sin añadir
              prefijo al URL usando el route group <code>(shell)</code>.
            </p>
          </Card>
        </aside>

        <section className="md:col-span-8">{children}</section>
      </div>
    </div>
  );
}
