# ADR 0001: Estructura base del repo (Next.js App Router + Shell + UI)

- **Estado:** Aceptado
- **Fecha:** 2025-12-25

## Contexto

Este repositorio es un starter para proyectos frontend en Next.js. El objetivo principal es que el proyecto pueda crecer sin volverse difícil de entender o mantener, especialmente cuando se suman pantallas, componentes y lógica de negocio.

Problemas que queremos evitar:

- Repos que crecen y terminan siendo un “cajón desastre” (no se sabe dónde está cada cosa).
- Demasiada lógica mezclada con routing/layouts.
- Dependencia excesiva de IA para entender el código porque la estructura no guía.
- UI inconsistente por falta de componentes base reutilizables.

Además, el canal "Ops And Code" busca un enfoque práctico: estructura clara, documentación mínima, y posibilidad de automatizar (CI/CD) y dockerizar.

## Decisión

Usamos:

1) **Next.js con App Router**, manteniendo las rutas y layouts en `app/`.
2) Un **route group** llamado `(shell)` para aplicar un layout común (top bar / navegación / composición) a un conjunto de rutas, sin que el nombre aparezca en la URL.
3) **Tailwind CSS** como sistema de estilos.
4) **shadcn/ui** como base de componentes (copiados al repo), para asegurar consistencia visual y facilidad de personalización.

La estructura inicial de rutas queda:

- `/` (home/landing): `app/page.tsx`
- `/dashboard` (demo): `app/(shell)/dashboard/page.tsx`
- Layout global: `app/layout.tsx`
- Layout del shell: `app/(shell)/layout.tsx`

## Justificación

- **App Router** simplifica el manejo de layouts y composición de UI por rutas.
- El **shell** permite demostrar desde el primer día un patrón real de aplicación (layout compartido) sin necesidad de monorepo.
- **Tailwind + shadcn** acelera el desarrollo y mantiene consistencia visual sin inventar un sistema de diseño desde cero.
- La decisión favorece repos pequeños y mantenibles: el proyecto no necesita “arquitectura compleja” para ser ordenado.

## Alternativas consideradas

1) **Pages Router (`pages/`)**
   - Descartado: para este starter priorizamos layouts y composición moderna (App Router).

2) **Monorepo (apps/packages)**
   - Descartado por ahora: el objetivo inicial es un repo pequeño, fácil de copiar y mantener.
   - Se deja abierto para el futuro, si el canal necesita un template específico de monorepo.

3) **Microfrontends reales desde el inicio (varias apps)**
   - Descartado para el primer video: aumenta la complejidad y el mantenimiento.
   - En su lugar se trabaja con “microfrontends lógicos” (separación modular por dominio) y se deja un paso posterior para multi-app o estrategias más avanzadas.

## Consecuencias

**Positivas**
- La base queda clara y demostrable en pocos minutos.
- El shell facilita mantener consistencia entre pantallas.
- UI más limpia y homogénea desde el primer commit.
- Reduce fricción para terceros: se entiende rápido dónde tocar.

**Negativas / trade-offs**
- El route group `(shell)` puede confundir al principio (no existe la ruta `/shell`).
- shadcn introduce componentes en el repo (no como dependencia), por lo que hay que mantenerlos si se personalizan mucho.

## Notas

- En un siguiente ADR se documentará la evolución hacia una estructura por módulos (`src/modules` + `src/shared`) cuando se empiece a separar por dominios de producto.
- En otro ADR se documentará la decisión de dockerizar y el enfoque de CI/CD (GitHub Actions).
