import * as React from 'react'
import { Container, Dimmer } from 'semantic-ui-react'
import CommodityThumbnail from 'components/shared/CommodityThumbnail'

interface CommoditiesProps {
    commodities: Array<{
        id: number,
        commoditySetId: number,
        image: string,
    }>,
    imagesLoaded: boolean,
    selectedCommodityId: number,
}

const style = {
    container: {
        alignItems: 'space-between',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
    } as React.HTMLAttributes<HTMLDivElement>,
    placeholder: {
        backgroundColor: 'grey',
        borderRadius: '500rem',
        height: 35,
        width: 35,
        margin: '.75rem',
    },
}

const Placeholder = () => <div style={ style.placeholder } />

const Commodities: React.StatelessComponent<CommoditiesProps> = ({
    commodities,
    imagesLoaded,
    selectedCommodityId,
}) =>
    <Dimmer.Dimmable
        as={ Container }
        blurring
        dimmed={ !imagesLoaded }
        style={ style.container }
    >
        <Dimmer active={ !imagesLoaded } inverted />

        {
            commodities.map(c =>
                imagesLoaded
                    ? (
                        <CommodityThumbnail
                            active={ c.id === selectedCommodityId }
                            disabled={ false }
                            key={ c.id }
                            src={ c.image }
                            to={ `/sets/${c.commoditySetId}/${c.id}` }
                        />
                    )
                    : <Placeholder key={ c.id } />
            )
        }
    </Dimmer.Dimmable>

export default Commodities
