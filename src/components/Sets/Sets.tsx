import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Grid } from 'semantic-ui-react'
import Commodities from './Commodities'
import SelectedCommodity from './SelectedCommodity'

const Sets = ({
    orderedCommoditySets,
    selectedCommodityId,
    selectedCommoditySetId,
}) =>
    <Grid celled="internally" padded>
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
                    value={ selectedCommoditySetId || null }
                />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 4 }>
                <Commodities />
            </Grid.Column>
            <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 12 }>
                <SelectedCommodity />
            </Grid.Column>
        </Grid.Row>
    </Grid>

export default Sets
