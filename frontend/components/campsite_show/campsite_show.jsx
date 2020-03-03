import React from 'react';
class CampsiteShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCampsite(this.props.match.params.id);
        
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id != this.props.match.params.id){
            this.props.fetchCampsite(this.props.match.params.id);

        }
    }

    render(){
        const {campsite } = this.props;

        if (this.props.campsite){
            return (
                <div>
                    <ul>
                        <li>
                            {campsite.name}
                        </li>
                            {campsite.venue}
                    </ul>
                </div>
            )   
        }
        else
            return(
                null
            );
         
    }
}

export default CampsiteShow;