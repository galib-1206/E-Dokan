import React from 'react'
import axios from "axios";
import { productListURL } from '../constants';
import {
    ItemMeta,
    ItemImage,
    ItemHeader,
    ItemGroup,
    ItemExtra,
    ItemDescription,
    ItemContent,
    Button,
    Icon,
    Image,
    Item,
    Label,
    Container,
    Dimmer,
    Loader,
    Message,
    Segment
} from 'semantic-ui-react'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

class ProductList extends React.Component {
    state = {
        loading: false,
        error: null,
        data: []
    };

    componentDidMount() {
        this.setState({ loading: true });
        axios
            .get(productListURL)
            .then(res => {
                this.setState({ data: res.data, loading: false });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    }
    render() {
        const { data, error, loading } = this.state;

        return (

            <Container>
                {error && (
                    <Message
                        error
                        header="There was some errors with your submission"
                        content={JSON.stringify(error)}
                    />
                )}
                {loading && (
                    <Segment>
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>

                        <Image src="/images/wireframe/short-paragraph.png" />
                    </Segment>
                )}
                <ItemGroup divided>
                    <Item>
                        <ItemImage src='https://react.semantic-ui.com/images/wireframe/image.png' />

                        <ItemContent>
                            <ItemHeader as='a'>My Neighbor Totoro</ItemHeader>
                            <ItemMeta>
                                <span className='cinema'>IFC Cinema</span>
                            </ItemMeta>
                            <ItemDescription>{paragraph}</ItemDescription>
                            <ItemExtra>
                                <Button primary floated='right' icon labelPosition='right'>
                                    Add cart
                                    <Icon name='cart plus' />
                                </Button>
                                <Label>Limited</Label>
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                </ItemGroup>
            </Container>

        )
    }
}

export default ProductList;