import { Center, Float, PresentationControls, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { Vector3 } from "three";

const Text = () => {
  const { theme } = useTheme();
  const TextMaterial = () => (
    <meshBasicMaterial color={theme === "light" ? "#fafafa" : "#141414"} />
  );
  const { width: w } = useThree((state) => state.viewport);

  const texts = [
    {
      text: "creative front-end",
      position: new Vector3(0, 0, 0),
    },
    {
      text: "developer",
      position: new Vector3(w > 1440 ? 1 : w / 5, w > 1024 ? -0.6 : -w / 12, 0),
    },
  ];

  const textSize = w > 400 ? 20 : 15;

  return (
    <>
      {texts.map((item, id: number) => (
        <Text3D
          font="/Montserrat_Bold.json"
          size={w / textSize}
          height={0.05}
          key={id}
          position={item.position}
        >
          {item.text}
          <TextMaterial />
        </Text3D>
      ))}
    </>
  );
};

export default Text;
