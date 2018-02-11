import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Grid } from 'semantic-ui-react'
import Commodities from './Commodities'
import SelectedCommodityOverview from './SelectedCommodityOverview'
import SelectedCommodityTrade from './SelectedCommodityTrade'

const style = {
    commoditiesCol: {
        minHeight: 70,
    },
    dropdown: {
        marginLeft: 20,
    },
}

const Sets = ({
    commodities,
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
                        value={ selectedCommoditySetId || null }
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
