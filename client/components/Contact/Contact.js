import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import axios from 'axios';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SaveIcon from 'material-ui/svg-icons/content/save';

class Contact extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderField(field) {
        const { meta: { touched, error } } = field;

        const fieldStyle = {
            errorStyle: {
                color: 'rgb(217, 83, 79)',
            },
            underlineStyle: {
                borderColor: 'rgb(119, 136, 153)',
            },
            floatingLabelStyle: {
                color: 'rgb(119, 136, 153)',
            },
            floatingLabelFocusStyle: {
                color: 'rgb(119, 136, 153)',
            }
        };

        return (
            <div style={{ paddingLeft: 12 }}>
                <TextField style={{ width: '100%' }}
                           hintText={field.label}
                           floatingLabelText={field.label}
                           multiLine={ true }
                           errorText={touched ? error : null}
                           errorStyle={fieldStyle.errorStyle}
                           { ...field.input } />
            </div>
        );
    }

    onSubmit({ senderEmail, text }) {
        // TODO: Show error if message failed to send, success message if successful. Then re-direct user to / route if email was successfully sent
        axios.post('/api/contact/', { senderEmail, text })
             .then((emailRes) => {
                 console.log('emailRes', emailRes);
             })
             .catch((emailErr) => {
                 console.log('emailErr', emailErr)
             });
    }

    render() {
        const { handleSubmit } = this.props;

        const paperStyle = {
            width: '98%',
            maxWidth: 1000,
            padding: 20,
            margin: 50,
            display: 'inline-block',
            background: 'white',
            textAlign: 'left'
        };

        return(
            <div className='contact-container text-center'> 
                <Paper style={ paperStyle } zDepth={ 5 }>
                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                        <Field name='senderEmail' label='Your Email Address' component={ this.renderField } />
                        <Field name='text' label='Message' component={ this.renderField } />

                        <RaisedButton icon={ <SaveIcon /> }
                                      type='submit'
                                      label='Save'
                                      backgroundColor='rgb(164, 198, 57)'
                                      labelColor='rgb(255, 255, 255)'
                                      style={{ margin: 12 }} />
                    </form>
                </Paper> 
            </div>
        );
    }

}

function validate(values) {
    const errors = {};

    if (!values.senderEmail) {
        errors.senderEmail = 'Please enter your email address';
    }

    if (!values.text) {
        errors.text = 'Please enter your message';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'ContactForm'
})(connect()(Contact));