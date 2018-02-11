import * as React from 'react'
import { Container, Dimmer } from 'semantic-ui-react'

interface ImgProps {
    images: Array<string>,
}

const getImgPromise = (src: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
        const image = new Image()

        image.onload = () => resolve(image)
        image.onerror = () => reject(image)

        image.src = src
    })

const preloadImages = EnhancedComponent => {
    class IfImagesLoaded extends React.Component<ImgProps> {
        static displayName = `RenderIfImagesLoaded(${EnhancedComponent.displayName || 'Component'})`

        state = { allLoaded: false }

        preload = async () => {
            try {
                const promises = this.props.images.map(img => getImgPromise(img))
                await Promise.all(promises)

                this.setState({ allLoaded: true })
            } catch (error) {
                console.log(error)
            }
        }

        async componentDidMount() {
            this.preload()
        }

        async componentWillReceiveProps(newProps: ImgProps) {
            if (newProps.images.length !== this.props.images.length) {
                this.setState({ allLoaded: false }, () => {
                    this.preload()
                })
            }
        }

        render() {
            const enhanced = <EnhancedComponent { ...this.props } />
            if (this.state.allLoaded) {
                return enhanced
            }

            return (
                <Dimmer.Dimmable as={ Container } blurring dimmed>
                    <Dimmer active>
                        { enhanced }
                    </Dimmer>
                </Dimmer.Dimmable>
            )
        }
    }

    return IfImagesLoaded
}

export default preloadImages
