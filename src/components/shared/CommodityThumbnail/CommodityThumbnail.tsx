import * as React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

const IMAGE_SIZE = 35

const style = {
    image: {
        height: IMAGE_SIZE,
        width: IMAGE_SIZE,
        margin: '.75rem',
        boxShadow: 'none',
        opacity: 1,
        transition: 'all 200ms',
        userDrag: 'none',
        userSelect: 'none',
    },
    activeImage: {
        boxShadow: '0 0 2px 3px teal',
    },
    hoveredImage: {
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
    },
    disabledImage: {
        boxShadow: 'none',
        opacity: 0.2,
    },
}

const CommodityThumbnail = ({
    active,
    dimmed,
    hovered,
    onHover,
    onLeave,
    src,
    to,
}) =>
    <Image
        as={ Link }
        circular
        onMouseOut={ onLeave }
        onMouseOver={ onHover }
        spaced
        src={ src }
        style={{
            ...style.image,
            ...(hovered ? style.hoveredImage : {}),
            ...(dimmed ? style.disabledImage : {}),
            ...(active ? style.activeImage : {}),
        }}
        to={ to }
    />

export default CommodityThumbnail
