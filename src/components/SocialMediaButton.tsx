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
    <li className={styles.item}>
      <a className={styles.link} href={mapping.link} target="_blank" rel="noreferrer">
        {mapping.text}
      </a>
    </li>
  );
};

export default SocialMediaButton;
