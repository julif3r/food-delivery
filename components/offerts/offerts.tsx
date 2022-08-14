import Image from 'next/image';
import styles from '../../styles/Offerts.module.scss';

export default function Offerts() {
    return (
        <>
            <div className={styles.offers}>
                <div className={styles.desertsOffert}>
                    <div className={styles.offertImageWrapper}>
                        <div className={styles.offertImage}>
                            <Image layout="fill" src="/offert-cake.png" />
                        </div>
                    </div>

                    <div className={styles.offertContent}>
                        <div className={styles.offertTitle}>
                            All deserts
                        </div>

                        <div className={styles.offertValue}>
                            20% OFF
                        </div>

                        <div className={styles.offertCategory}>
                            Deserty
                        </div>
                    </div>
                </div>

                <div className={styles.burgersOffert}>
                    <div className={styles.offertImageWrapper}>

                        <div className={styles.offertImage}>
                            <Image layout="fill" src="/offert-burger.png" />
                        </div>
                    </div>

                    <div className={styles.offertContent}>
                        <div className={styles.offertTitle}>
                            Big Burgers
                        </div>

                        <div className={styles.offertValue}>
                            50% off
                        </div>

                        <div className={styles.offertCategory}>
                            Fooddies
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
