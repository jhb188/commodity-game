import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import PageLoader from 'components/shared/PageLoader'

const locationHelper = locationHelperBuilder({})

export const userIsAuthenticated = connectedRouterRedirect({
    authenticatedSelector: state => Boolean(state.auth.data.id),
    authenticatingSelector: state => state.auth.isFetching,
    wrapperDisplayName: 'UserIsAuthenticated',
    AuthenticatingComponent: PageLoader,
    redirectPath: '/login',
})

export const userIsNotAuthenticated = connectedRouterRedirect({
    authenticatedSelector: state => Boolean(!state.auth.data.id),
    authenticatingSelector: state => state.auth.isFetching,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    AuthenticatingComponent: PageLoader,
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
    allowRedirectBack: false,
})
