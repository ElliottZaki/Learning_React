import React from 'react';

// We have created a stateless component that creates a simple h2 tag with Loading written instead of hard codding it in the app file. 

const Loading = ({message}) => <h2>({message})</h2>


// If you have several components that you want to export, you would remove the default line below.
// Else, if you have a single component than you would want to keep the export default line below.
export default Loading;