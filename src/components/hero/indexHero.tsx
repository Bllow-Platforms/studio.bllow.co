import { FC } from "react";
import { HeroContainer } from "../layouts/container";
import { DefaultTypography } from "../typography";
interface IndexHeroProps {}

export const IndexHero: FC<IndexHeroProps> = (props) => {
  return (
    <HeroContainer>
      <div>
        <DefaultTypography>Support your creative work</DefaultTypography>
      </div>
    </HeroContainer>
  );
};
