import * as React from 'react'
import CommodityThumbnail from './CommodityThumbnail'

interface HoverableCommodityThumbnailProps {
    active: boolean,
    disabled: boolean,
    src: string,
    to: string,
}

class HoverableCommodityThumbnail extends React.Component<HoverableCommodityThumbnailProps> {
    state = { hovered: false }

    onHover = () => this.setState({ hovered: true })
    onLeave = () => this.setState({ hovered: false })

    render() {
        return (
            <CommodityThumbnail
                hovered={ this.state.hovered }
                onHover={ this.onHover }
                onLeave={ this.onLeave }
                { ...this.props }
            />
        )
    }
}

export default HoverableCommodityThumbnail
