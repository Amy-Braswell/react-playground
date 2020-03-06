import React from 'react'
import LanguageContext from './LanguageContext'

export default function LangControls(props) {
    // This function is returning <LanguageContext.Consumer> and the callback function renderProp()
    return (
        // This Consumer doesn't output any new elements in the DOM. It only outputs the result of the render prop.
        <LanguageContext.Consumer>
            {/* To get the value out of the consumer, we accept the value as an argument to the render prop below. 
            We refactored the renderProp() children prop into an arrow function to make it more concise. */}
            {(value) => {
                // If we console.log(value), we have access to the value inside context in the function component
            
                // {/* This is a children prop... it was a renderProp() function until we changed it to (value) above.
                // Here this children prop is like a mix between a callback prop and a children prop.
                // We are using it to return JSX that we want to render in the DOM. 
                // We have moved the JSX we want to return inside this children prop. */} 
                //Context consumers aren't the only time we'll use render props, but they're the only way we'll use for now.      
                return (
                    <>
                        {/* Since we can get the value of the consumer, we can use it to disable the active button. */}
                        <button
                           disabled={value.lang === 'en-GB'}>
                        British{' '}
                        <span role='img' aria-label='en-GB'>🇬🇧</span>
                        </button>
                        {' '}
                        <button
                            disabled={value.lang === 'en-US'}>>
                        American{' '}
                        <span role='img' aria-label='en-US'>🇺🇸</span>
                        </button>
                        {' '}
                        <button
                            disabled={value.lang === 'ko'}>>
                        Korean{' '}
                        <span role='img' aria-label='ko'>🇰🇷</span>
                        </button>
                    </>
                )
            }}
        </LanguageContext.Consumer>
    );
  }