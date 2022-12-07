import styles from "./Motion.module.css";
import Image from "next/image";

const MotionContent = () => {
  return (
    <div className={styles.container}>
        <h3>Motion Capture</h3>
        <p className={styles.desc}>Motion detection using Pandas and OpenCV in Python. This project is a motion detection program that captures an image when motion is detected.</p>
        <p className={styles.sub}>Images captured using the program:</p>
        <div className={styles.center}>
            <Image
                src="/images/capimage.png"
                alt="capturedimage"
                width={500}
                height={400}
            />
        </div>
    </div>
  );
};

export default MotionContent;