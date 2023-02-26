import React from 'react';

const UserContext = React.createContext();

export function Con(){

return <UserContext.Provider value="dark"><App/><App1/></UserContext.Provider>;
}

function App()
{
	return <p>useContext Hook : {React.useContext(UserContext)}</p>;
}

function App1()
{
	return <UserContext.Consumer>{(value) => <p>context Consumer : {value}</p>}</UserContext.Consumer>;
}
