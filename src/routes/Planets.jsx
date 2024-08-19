import Planet from "../components/Planet";
import planets from "../data/data.json";
import { useParams } from "react-router-dom";

export default function Planets() {
  const { planetName } = useParams();

  const planet = planets.find(
    (p) => p.name.toLowerCase() === planetName.toLowerCase(),
  );

  return (
    <Planet
      name={planet.name}
      bgHover={planet.bgHover}
      planetImage={planet.images.planet}
      overviewContent={planet.overview.content}
      overviewSource={planet.overview.source}
      structureContent={planet.structure.content}
      structureSource={planet.structure.source}
      geologyContent={planet.geology.content}
      geologySource={planet.geology.source}
      geologyImage={planet.images.geology}
      internalImage={planet.images.internal}
      rotation={planet.rotation}
      revolution={planet.revolution}
      radius={planet.radius}
      temperature={planet.temperature}
    />
  );
}
