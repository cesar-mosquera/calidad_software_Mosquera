// src/components/GoodBye.tsx
// Componente trivial usado únicamente para verificar la configuración.
interface GoodByeProps {
  name: string;
}

export function GoodBye({ name }: GoodByeProps) {
  return <p>Hola, {name}</p>;
}