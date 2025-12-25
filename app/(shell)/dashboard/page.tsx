import { Badge } from "@/shared/ui/shadcn/badge";
import { Button } from "@/shared/ui/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import { Separator } from "@/shared/ui/shadcn/separator";

export default function DashboardPage() {
    return (
        <main className="space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <Badge variant="secondary" className="mb-2">
                                /dashboard
                            </Badge>
                            <CardTitle>Dashboard (demo)</CardTitle>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Aquí vas a conectar <b>modules/</b> y <b>shared/</b>. Por ahora es una
                                pantalla bonita para el primer video.
                            </p>
                        </div>

                        <Button>Crear algo</Button>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Separator />

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Card className="border-dashed">
                            <CardHeader>
                                <CardTitle className="text-base">Próximo paso</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Crea <code>src/modules/dashboard</code> y mueve esta UI allí.
                            </CardContent>
                        </Card>

                        <Card className="border-dashed">
                            <CardHeader>
                                <CardTitle className="text-base">Regla</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                <code>shared</code> no conoce negocio. <code>modules</code> sí puede
                                importar de <code>shared</code>.
                            </CardContent>
                        </Card>
                    </div>

                    <div className="rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground">
                        Tip para el video: explica que este layout viene de{" "}
                        <code>app/(shell)/layout.tsx</code> y que el route group no afecta al URL.
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
