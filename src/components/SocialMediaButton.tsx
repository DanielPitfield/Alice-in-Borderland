import styles from "../styles/index.module.scss";

import { socialMediaMappings, type SocialMediaName } from "../data/SocialMedia";

interface SocialMediaButtonProps {
  name: SocialMediaName;
}

const SocialMediaButton = (props: SocialMediaButtonProps) => {
  const mapping = socialMediaMappings.find((x) => x.name === props.name);

  if (!mapping) {
    return null;
  }

  return (
    <li>
      <a href={mapping.link}>{mapping.text}</a>
    </li>
  );
};

export default SocialMediaButton;
