'use client'

import ScrollChapter from "../_components/ScrollChapter"
import { Container } from "../_components/Section"
import { Button } from "../_components/Button"
import BeanIcon from "../_components/BeanIcon"
import { handleHashLinkClick } from "../_lib/scrollytelling"

export default function FinalCTA({
  handleContactModal,
}: {
  handleContactModal: () => void
}) {
  return (
    <ScrollChapter tone="cream"
      steps={[
        <Container key="cta">
          <div className="relative flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
            <BeanIcon size={56} className="text-(--coffee)" />
            <h2 className="font-(family-name:--font-display) text-4xl md:text-6xl leading-[1.05] font-medium text-(--coffee)">
              Tu próxima taza está a un{" "}
              <em className="not-italic italic text-(--green-deep) font-semibold">mensaje</em> de distancia.
            </h2>
            <p className="text-base md:text-lg text-(--coffee)/80 max-w-xl leading-relaxed">
              Pídelo para esta semana, para tu casa, tu oficina o tu familia. Lo preparamos,
              lo empacamos y lo llevamos. Tú solo decides cómo lo vas a preparar.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button variant="secondary" size="lg" onClick={handleContactModal}>
                Hacer un pedido
              </Button>
              <a
                href="#Presentaciones"
                onClick={(e) => handleHashLinkClick(e, "#Presentaciones")}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base md:text-lg font-medium rounded-full border-2 border-(--coffee) text-(--coffee) hover:bg-(--coffee) hover:text-(--cream) transition-all duration-300"
              >
                Ver presentaciones
              </a>
            </div>
          </div>
        </Container>,
      ]}
    />
  )
}
