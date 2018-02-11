import * as React from 'react'
import CommodityThumbnail from 'components/shared/CommodityThumbnail'

interface CommoditiesProps {
    commodities: Array<{
        id: number,
        commoditySetId: number,
        image: string,
    }>,
    selectedCommodityId: number,
}

const style = {
    container: {
        alignItems: 'space-between',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
    } as React.HTMLAttributes<HTMLDivElement>,
}

const Commodities: React.StatelessComponent<CommoditiesProps> = ({
    commodities,
    selectedCommodityId,
}) =>
    <div style={ style.container }>
        {
            commodities.map(c =>
                <CommodityThumbnail
                    active={ c.id === selectedCommodityId }
                    disabled={ false }
                    key={ c.id }
                    src={ c.image }
                    to={ `/sets/${c.commoditySetId}/${c.id}` }
                />
            )
        }
    </div>

export default Commodities
