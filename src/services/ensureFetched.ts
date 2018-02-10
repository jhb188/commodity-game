import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import capitalize from 'capitalize'

const ensureFetched = (storeName: string, fetchActionCreator: Function): Function => {
    const capitalizedKey = capitalize(storeName)
    const hasFetchedKey = `hasFetched${capitalizedKey}`
    const isFetchingKey = `isFetching${capitalizedKey}`
    const fetchKey = `fetch${capitalizedKey}`

    return compose(
        connect(
            state => ({
                [hasFetchedKey]: state[storeName].hasFetched,
                [isFetchingKey]: state[storeName].isFetching,
            }),
            {
                [fetchKey]: fetchActionCreator,
            }
        ),
        lifecycle({
            componentDidMount() {
                if (!this.props[hasFetchedKey] && !this.props[isFetchingKey]) {
                    this.props[fetchKey]()
                }
            },
        })
    )
}

export default ensureFetched
