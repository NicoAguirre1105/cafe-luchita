'use client'

import Image from "next/image"
import ScrollStory from "../_components/ScrollStory"
import { Container } from "../_components/Section"
import SectionHeader from "../_components/SectionHeader"
import { Button } from "../_components/Button"
import BeanIcon from "../_components/BeanIcon"

interface Product {
  name: string
  weight: string
  format: string
  description: string
  price: string
  image?: string
  badge?: string
  upcoming?: boolean
}

const products: Product[] = [
  {
    name: "Café molido",
    weight: "250 g",
    format: "Molido medio",
    description: "El tamaño justo para probar o para quienes viven solos. Listo para cafetera o filtro.",
    price: "$--.--",
    image: "/img/cafe_molido.jpg",
    badge: "Más pedido",
  },
  {
    name: "Café molido",
    weight: "450 g",
    format: "Molido medio",
    description: "Nuestro formato familiar. Suficiente para varias semanas de rituales lentos en casa.",
    price: "$--.--",
    image: "/img/cafe_molido.jpg",
  },
  {
    name: "Café en grano",
    weight: "450 g",
    format: "Grano entero",
    description: "Para quienes muelen al momento y persiguen el aroma más fresco posible.",
    price: "$--.--",
    image: "/img/cafe_grano.jpg",
  },
  {
    name: "Edición Premium",
    weight: "—",
    format: "Próximamente",
    description: "Estamos preparando algo especial. Lotes selectos, tueste cuidado al gramo.",
    price: "Próximamente",
    upcoming: true,
  },
]

export default function Presentations({
  handleContactModal,
}: {
  handleContactModal: () => void
}) {
  return (
    <ScrollStory tone="cream" prevTone="milk" id="Presentaciones"
      steps={[
        <Container size="wide" key="header">
          <SectionHeader
            eyebrow="Presentaciones"
            accentColor="var(--green)"
            title={
              <>
                Escoge la que va con tu{" "}
                <em className="not-italic italic text-(--green) font-semibold">ritmo</em>.
              </>
            }
            description="Todas las presentaciones tienen el mismo grano, el mismo tueste medio y el mismo cuidado. Solo cambia el formato."
          />
        </Container>,
        <Container size="wide" key="cards">
          <h3 className="mb-10 md:mb-12 font-(family-name:--font-display) text-3xl md:text-5xl text-center text-(--coffee)">
            Un café, cuatro formas de{" "}
            <em className="not-italic italic text-(--green) font-semibold">vivirlo</em>.
          </h3>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <li key={`${product.name}-${product.weight}-${i}`}>
                <ProductCard product={product} onContact={handleContactModal} />
              </li>
            ))}
          </ul>
        </Container>,
      ]}
    />
  )
}

function ProductCard({ product, onContact }: { product: Product; onContact: () => void }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
        product.upcoming
          ? "border-dashed border-(--bark)/30 bg-(--milk)"
          : "border-(--sand) bg-(--milk) hover:border-(--green) hover:shadow-[0_10px_40px_-20px_rgba(44,26,14,0.4)]"
      }`}
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 right-3 z-10 rounded-full bg-(--orange) px-3 py-1 text-xs font-semibold text-(--coffee)">
          {product.badge}
        </span>
      )}

      {/* Image / placeholder — shorter aspect for compact card */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-(--cream)">
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} ${product.weight}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 80vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-(--cream) text-(--green)">
            <BeanIcon size={56} className="opacity-30" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-xs uppercase tracking-widest text-(--green) font-semibold">
            {product.format}
          </span>
          <span className="font-(family-name:--font-display) text-base text-(--bark)">
            {product.weight}
          </span>
        </div>

        <h3 className="font-(family-name:--font-display) text-xl text-(--coffee)">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center justify-between border-t border-(--sand) pt-3 gap-3 min-w-0">
          {product.upcoming ? (
            <span className="font-(family-name:--font-display) text-base text-(--bark)/60 italic truncate">
              Próximamente
            </span>
          ) : (
            <>
              <span className="font-(family-name:--font-display) text-xl text-(--coffee) shrink-0">
                {product.price}
              </span>
              <Button variant="secondary" size="md" onClick={onContact}>
                Pedir
              </Button>
            </>
          )}
        </div>
      </div>
    </article>
  )
}
