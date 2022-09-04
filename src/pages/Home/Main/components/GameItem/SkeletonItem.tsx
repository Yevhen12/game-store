import React from 'react'
import styles from './styles.module.scss'
import Skeleton from "react-loading-skeleton";

const SkeletonItem: React.FC = () => {
    return (
        <div className={styles.skeleton_block}>
            <Skeleton className={styles.imageSkeleton} />
            <Skeleton width={50} height={9} containerClassName={styles.skeleton_item} className="mb-2" />
            <Skeleton width={120} height={13} containerClassName={styles.skeleton_item} className="mb-2" />
            <div className={styles.flex}>
                <Skeleton height={8} width={40} className={styles.last_item} />
                <Skeleton height={8} width={20} className={styles.last_item} />
            </div>

        </div>
    )
}

export default React.memo(SkeletonItem)