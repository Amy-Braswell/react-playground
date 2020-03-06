import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {
    //This line creates context using the context variable we created in LanguageContext.js for its key
    //This approach to reading context is called "static contextType" - note the use of "static"
    static contextType = LanguageContext
    render() {
        // const copy = languageSpecificCopy['en-US'] || {}
        // This is similar to defaultProps but languageSpecificCopy 
        // isn't a prop so we can't use defaultProps. Meaning, if we 
        // attempt to select a key inside the languageSpecificCopy object 
        // that doesn't exist, it could return undefined. If copy === undefined 
        // then when we attempt to do copy.title and copy.body, our app could 
        // throw errors as that could equate to undefined.title and undefined.body 
        // which won't work. The || {} is giving us a safety net to avoid dealing 
        // with undefined and instead use an empty object in the worst case
        const copy = languageSpecificCopy[this.context.lang] || {}
        return(
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
            </section>
        )
    }
}

export default GreatGrandChild