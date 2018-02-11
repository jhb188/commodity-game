import * as React from 'react'
import { Card, Dimmer, Image } from 'semantic-ui-react'

const style = {
    hideContent: {
        alignItems: 'center',
        display: 'flex',
        height: 93,
        justifyContent: 'center',
        width: '100%',
    } as React.HTMLAttributes<HTMLDivElement>,
    image: {
        userSelect: 'none',
        userDrag: 'none',
    },
    notOwned: {
        opacity: 0.2,
        filter: 'blur(2px)',
    },
    placeholder: {
        backgroundColor: 'grey',
        height: 290,
        width: 290,
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

const ImgPlaceholder = () => <div style={ style.placeholder } />

const SelectedCommodityOverview = ({
    imagesLoaded,
    numberCollected,
    selectedCommodity,
}) => {
    const owned = numberCollected > 0

    return (
        <Dimmer.Dimmable
            as={ Card }
            centered
            dimmed={ !imagesLoaded }
        >
            {
                imagesLoaded
                    ? (
                        <Image
                            src={ selectedCommodity.image }
                            style={{
                                ...style.image,
                                ...(owned
                                    ? {}
                                    : style.notOwned
                                ),
                            }}
                        />
                    )
                    : <ImgPlaceholder />
            }

            {
                owned
                    ? (
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
                                { 'Description will go here.' }
                            </Card.Description>
                        </Card.Content>
                    )
                    : (
                        <div style={ style.hideContent } />
                    )
            }

            <Card.Content extra>
                {
                    numberCollected
                        ? `${numberCollected} owned`
                        : `You don't own this commodity yet.`
                }
            </Card.Content>

            <Dimmer active={ !imagesLoaded } inverted />
        </Dimmer.Dimmable>
    )
}

export default SelectedCommodityOverview
