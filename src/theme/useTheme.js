import React, { Component } from 'react';
import { getFromLS, setToLS } from '../utils/storage';
import _ from 'lodash';

export default class useTheme extends Component{

    theme = getFromLS('theme');
    state = {
        theme: this.theme.scandiweb,
        themeLoaded : false
    }
    setMode = mode => {
        setToLS('theme', mode)
        this.setState({theme: mode})
    }

    getFonts = () => {
        const allFonts = _.values(_.mapValues(this.theme.scandiweb, 'font'))
        return allFonts
    }

    componentDidMount(){
        const localTheme = getFromLS('theme');
        localTheme ? this.setState({theme: localTheme}) : this.setState({theme: this.theme.scandiweb})
        this.setState({themeLoaded: true})
    }

}