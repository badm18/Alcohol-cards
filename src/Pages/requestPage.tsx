import React from 'react'
import { RouteComponentProps } from 'react-router'
import app from 'firebase/app'
import { Button, Spinner } from 'react-bootstrap'
import { Cards } from '../Components/Card';




export class requestPage extends React.Component<RouteComponentProps<any>, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            card: [],
            name: '',
            loading: true,
        }
    }


    componentDidMount() {
        this.setState({ card: [], name: this.props.match.params.name });

        app.database().ref('cards').orderByChild('name').equalTo(this.props.match.params.name).once('value', ((snap) => {
            snap.forEach((elem) => {
                this.setState({ card: [...this.state.card, elem.val()] })
            })
            this.setState({ loading: false })
        }))
    }

    componentDidUpdate() {

        if (this.props.match.params.name != this.state.name) {
            this.setState({ card: [], name: this.props.match.params.name });


            app.database().ref('/cards').orderByChild('name').equalTo(this.props.match.params.name).once('value', ((snap) => {
                snap.forEach((elem) => {
                    this.setState({ card: [...this.state.card, elem.val()] })
                })
                this.setState({ loading: false })
            }))

        }


    }




    render() {

        if (this.state.loading) {
            return (

                <Spinner animation="border" role="status" id="spinner">
                    <span className="sr-only">Loading...</span>
                </Spinner>

            )
        } else {
            if (this.state.card.length === 0) {


                return (
                    <p className="NotFound">по запросу <strong>{this.props.match.params.name}</strong> ничего не найдено</p>
                )}else{


                return (
                    <>
                        <h1>{this.props.match.params.name}</h1>

                        <Cards CardInfo={this.state.card} />
                    </>
                )
            }

        }




    }
}