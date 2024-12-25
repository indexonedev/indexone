import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css"; 

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Welcome to Our Platform</h1>
            <p className={styles.description}>
              Build something amazing with our powerful tools and features
            </p>
          </div>
          <div className={styles.heroImage}>
            <ThemeImage
              srcLight="/hero-light.png"
              srcDark="/hero-dark.png"
              alt="Hero illustration"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
