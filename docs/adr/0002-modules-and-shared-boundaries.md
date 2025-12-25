# ADR 0002: Separación por módulos (microfrontends lógicos) y capa shared

- **Estado:** Propuesto (pasará a Aceptado cuando movamos el código)
- **Fecha:** 2025-12-25

## Contexto

A medida que un frontend crece, es habitual que el repositorio termine lleno de carpetas genéricas
(`components`, `hooks`, `utils`) donde todo se mezcla y se vuelve difícil de mantener. Eso genera:

- Dificultad para entender “qué parte pertenece a qué dominio”.
- Aumento de dependencias circulares y acoplamiento.
- Dependencia de “contexto externo” (personas o IA) para navegar el repo.
- Refactors costosos porque no hay límites claros.

Este starter busca promover repos pequeños y mantenibles, y preparar el camino para escalar a
microfrontends reales en el futuro si fuese necesario, pero sin introducir esa complejidad desde el día 1.

## Decisión

Adoptamos una estructura por dominio usando “microfrontends lógicos” dentro del repo, separando:

- `src/modules/` para **módulos de producto/dominio** (dashboard, settings, marketing, etc.)
- `src/shared/` para **reutilizable transversal** (UI base, utilidades, config) sin lógica de negocio.

Las rutas y layouts seguirán viviendo en `app/` (App Router), y `app/` actuará como capa de wiring:
monta el shell, define rutas y compone páginas importando “pantallas” o componentes desde `src/modules`.

Estructura objetivo:

```txt
src/
  modules/
    dashboard/
      ui/
      model/
      lib/
      index.ts
    settings/
      ui/
      model/
      lib/
      index.ts
  shared/
    ui/
      shadcn/        
      primitives/   
      layout/
    lib/
    config/
    types/
