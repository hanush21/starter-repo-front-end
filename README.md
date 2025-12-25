# Ops And Code — Next.js Frontend Starter

Starter minimalista para proyectos **frontend en Next.js (App Router)** pensado para crecer sin volverse un caos.

La idea es simple: mantener el repositorio pequeño, entendible y fácil de mantener, separando el “wiring” de la app (rutas/layouts) de los módulos de producto. En el canal **Ops And Code** lo uso como base para construir ejemplos y plantillas reutilizables.

---

## Qué incluye (por ahora)

- ✅ Next.js con **App Router**
- ✅ Tailwind CSS
- ✅ UI base con **shadcn/ui** (componentes reutilizables)
- ✅ Un “shell layout” de ejemplo y una ruta `/dashboard` para demostrar la estructura

> En el video vamos a añadir: carpeta `docs/`, Docker y CI/CD (GitHub Actions).

---

## Estructura del proyecto

> Nota: el objetivo de esta estructura es que cuando el proyecto crezca, no tengas que “adivinar” dónde está cada cosa.

```txt
app/
  (shell)/
    layout.tsx
    dashboard/
      page.tsx
  layout.tsx
  page.tsx
  globals.css
public/
shared/            # (se irá usando para UI/utilidades comunes si lo prefieres)
components/ui/     # shadcn/ui (según tu configuración)
