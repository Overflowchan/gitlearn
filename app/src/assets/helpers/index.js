function getImage(imgs, idx) {
    const neededIndex = idx % imgs.length
    return imgs[neededIndex]
}

export { getImage }