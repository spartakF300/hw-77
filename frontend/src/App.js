import React, {Component} from 'react';
import ModalAdd from "./Components/Modal/ModalAdd";
import Card from "./Components/Card/Card";
import {connect} from "react-redux";
import {getThreads, postThread} from "./store/actions/action";
import Header from "./Components/Header/Header";


class App extends Component {
    state = {
        form: {
            message: '',
            author: '',
            image: null,
        },
        modal: false

    };
    componentDidMount() {
        this.props.getThreads()
    }

    clearState = () => {
        this.setState({...this.state, form: {message: '', author: '', image: null}})
    };
    onChangeHandler = (e) => {
        this.setState({form: {...this.state.form, [e.target.name]: e.target.value}})
    };

    filesHandler = (e) => {

        this.setState({form: {...this.state.form, [e.target.name]: e.target.files[0]}})
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state.form).forEach(key => {
            formData.append(key, this.state.form[key]);
        });

        this.props.postThread(formData);
        this.clearState();

    };

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        return (
            <div className="App">
                <Header
                    toggle={this.toggle}
                />
                <ModalAdd
                    onChangeHandler={this.onChangeHandler}
                    filesHandler={this.filesHandler}
                    submit={this.onSubmitHandler}
                    toggle={this.toggle}
                    modal={this.state.modal}
                    value={this.state.form}
                />
                {this.props.threads && this.props.threads.map(item => {
                    return <Card
                        image={item.image}
                        author={item.author}
                        message={item.message}
                        key={item.id}

                    />
                })}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        threads: state.threads,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        postThread: (data) => dispatch(postThread(data)),
        getThreads: () => dispatch(getThreads())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);