import * as React from 'react'
import { Card, Image } from 'semantic-ui-react'

const style = {
    image: {
        userSelect: 'none',
        userDrag: 'none',
    },
}

const scarcityDescription = scarcity => {
    if (scarcity < 1) {
        return 'Extremely rare'
    }

    if (scarcity < 5) {
        return 'Very rare'
    }

    if (scarcity < 20) {
        return 'Uncommon'
    }

    return 'Common'
}

const SelectedCommodityOverview = ({
    selectedCommodity,
}) =>
    <Card centered>
        <Image
            src={ selectedCommodity.image }
            style={ style.image }
        />

        <Card.Content>
            <Card.Header>
                { selectedCommodity.name }
            </Card.Header>

            <Card.Meta>
                <span>
                    { scarcityDescription(selectedCommodity.scarcity) }
                </span>
            </Card.Meta>

            <Card.Description>
                Description will go here.
            </Card.Description>
        </Card.Content>

        <Card.Content extra>
            Number collected will go here.
        </Card.Content>
    </Card>

export default SelectedCommodityOverview
