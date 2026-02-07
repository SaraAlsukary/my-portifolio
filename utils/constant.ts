import { Variants } from "framer-motion"

export const fadeRightSlide: Variants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    exit: {
        opacity: 0,
        x: -50,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}
export const fadeLeftSlide: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    },
    exit: {
        opacity: 0,
        x: 50,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
}

export const fadeBottomSlide: Variants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}
export const fadeTopSlide: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}
export const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.35,
            staggerDirection: 1,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1, // يختفي من آخر عنصر إلى أول عنصر
        },
    },
}

