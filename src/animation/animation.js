export const textVariantsLeft = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      duration: 0.6,
    }
  }),
}

export const textVariantsRight = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      duration: 0.6,
    }
  }),
}

export const textScale = {
  hidden: {
    scale: 0.5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.7
    }
  },
}

export const opacityDown = {
  hidden: {
    y: "50%",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.6
    }
  },
}

export const listVariants = {
  hidden: { opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    transition: {
      delay: index * 0.3,
      ease: 'easeIn'
    }
  }),
}
