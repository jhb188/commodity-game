import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Grid } from 'semantic-ui-react'
import { compose, uniq, pluck } from 'ramda'
import Commodities from './Commodities'
import SelectedCommodityOverview from './SelectedCommodityOverview'
import SelectedCommodityTrade from './SelectedCommodityTrade'

const style = {
    commoditiesCol: {
        minHeight: 70,
    },
    container: {
        paddingTop: 0,
    },
    dropdown: {
        marginLeft: 20,
    },
}

const getOwnedCommodities = compose(uniq, pluck('commodityId'))

const Sets = ({
    commodities,
    commodityItems,
    orderedCommodities,
    orderedCommoditySets,
    selectedCommodityId,
    selectedCommoditySetId,
}) => {
    const selectedCommodity = commodities[selectedCommodityId]

    return (
        <Grid
            padded
            stackable
            style={ style.container }
        >
            <Grid.Row>
                <Grid.Column>
                    <Dropdown
                        options={
                            orderedCommoditySets.map(({ id, name }) => ({
                                as: Link,
                                key: id,
                                text: name,
                                to: `/sets/${id}`,
                                value: id,
                            }))
                        }
                        placeholder="Select a set"
                        style={ style.dropdown }
                        value={ orderedCommoditySets.length && selectedCommoditySetId || null }
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column
                    tablet={ 16 }
                    computer={ 3 }
                    style={ style.commoditiesCol }
                >
                    <Commodities
                        commodities={
                            orderedCommodities.filter(
                                c => c.commoditySetId === selectedCommoditySetId
                            )
                        }
                        ownedCommodities={ getOwnedCommodities(commodityItems) }
                        selectedCommodityId={ selectedCommodityId }
                    />
                </Grid.Column>
                <Grid.Column
                    tablet={ 16 }
                    computer={ 6 }
                >
                    {
                        selectedCommodity
                            ? (
                                <SelectedCommodityOverview
                                    numberCollected={
                                        commodityItems.filter(
                                            ({ commodityId }) => commodityId === selectedCommodityId
                                        ).length
                                    }
                                    selectedCommodity={ selectedCommodity }
                                />
                            ) : null
                    }
                </Grid.Column>
                <Grid.Column
                    tablet={ 16 }
                    computer={ 7 }
                >
                    <SelectedCommodityTrade />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Sets
