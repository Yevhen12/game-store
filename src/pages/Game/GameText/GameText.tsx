import React from 'react'
import styles from './styles.module.scss'

const GameText: React.FC = () => {

    const mappedText = Array.from({ length: 4 }).fill(0).map((_, id) => <div key={id} className={styles.rigth_text_block}>
        
        <p className={styles.rigth_block_title}>
            Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className={styles.rigth_block_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
            Veniam dolor numquam error omnis ad consequatur.
            Voluptatem modi voluptate error nihil, ea quos.
            Ipsum voluptate quidem repellat optio voluptatum corrupti?
            Consectetur sit, dolore voluptatibus quos nesciunt quaerat.
            Tempore quae, cupiditate quis accusamus deleniti voluptatum!
            Earum mollitia tempora ad fugit minus expedita?
        </p>
    </div>
    )

    return (
        <div className={styles.block}>
            <div className={styles.left_section}>
                <p className={styles.left_section_title}>
                    Lorem ipsumet dolor sit amet.
                </p>
            </div>
            <div className={styles.rigth_section}>
                <p className={styles.rigth_block_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea distinctio dolore? Voluptatum, laborum culpa.</p>
                {mappedText}
                <p className={styles.rigth_text_bottom}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Itaque saepe molestiae hic non fuga repellat ad.
                    Repudiandae repellat ab voluptate ex expedita porro tenetur.
                    Adipisci unde voluptatibus velit neque rem consequuntur veniam.
                    Exercitationem ipsa ipsum deserunt impedit saepe nulla fuga.
                    Placeat, eos ea! Repellendus exercitationem dicta aliquam. Eius?
                    Similique accusamus quos perspiciatis, fuga a deleniti nemo.
                    Pariatur nobis vel at suscipit, laudantium optio. Iusto.
                </p>
            </div>
        </div>
    )
}

export default GameText