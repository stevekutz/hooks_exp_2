import React, {Fragment , useState, useEffects} from 'react';
import {Card, Container, Header} from 'semantic-ui-react';
import {Input} from 'react-rainbow-components';

const alignStyles = {width: '50%', margin: '5px auto', padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}                    
const inputStyles = {border: '1px solid purple', color: 'dodgerblue', ...alignStyles}
const headerStyles = {fontWeight: 'bold', color: 'darkyellow', ...alignStyles}
const inputStyles2 = {...inputStyles, ...alignStyles, ... {border: '4px solid orangered'} }


const HeadlineHooks2 = () => {

    const [greeting, setGreetingInput] = useState('Another Default State Greeting')    
    
    const _handleInputs = (ev) => setGreetingInput(
        ev.targetValue
        
        );

    return (
        <HeadlineFC headline = {greeting} onChangeHeadline = {_handleInputs} />    
    )
}

const HeadlineFC = ({headline, onChangeHeadline}) => (
    <div >
    <Header style = {headerStyles}> {headline}</Header>

    <Input
        label="Input Text"
        placeholder="Placeholder text"
        type="text"
        style = {inputStyles2}
        value = {headline}
        onChange={onChangeHeadline}
    />
</div>

)


 export default HeadlineHooks2;