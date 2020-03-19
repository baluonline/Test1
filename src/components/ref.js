import React from 'react';


const FancyButton = React.forwardRef((props,ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
        {console.log(props.children)}
    </button>
));

export default class FarwardRefs extends React.Component{
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    componentDidUpdate(prevProps){
        console.log('old props', prevProps);
        console.log('new props', this.props);
    }

    render(){
        return(
            <FancyButton ref={this.ref}> Click me</FancyButton>
        )
    }
}
