type BlurWordLayerProps = {
  sharp?: boolean;
};

const mainPhrase = "ENXERGUE COM CLAREZA • ENXERGUE COM CONFORTO • ENXERGUE COM ESTILO";
const secondaryPhrase =
  "SOS ÓTICA • ARAGUAÍNA • ÓCULOS PRONTO EM ATÉ 40 MINUTOS • CUIDADO COM A SUA VISÃO";

export function BlurWordLayer({ sharp = false }: BlurWordLayerProps) {
  return (
    <div className={sharp ? "clarity-reveal-layer" : "clarity-blur-layer"} aria-hidden="true">
      <div className="clarity-stack">
        <div className="clarity-track clarity-track-main">
          <span>{mainPhrase}</span>
          <span>{mainPhrase}</span>
          <span>{mainPhrase}</span>
        </div>
        <div className="clarity-track clarity-track-secondary">
          <span>{secondaryPhrase}</span>
          <span>{secondaryPhrase}</span>
          <span>{secondaryPhrase}</span>
        </div>
      </div>
    </div>
  );
}
