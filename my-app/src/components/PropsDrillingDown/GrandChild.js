import GrandGrandChild from "./GrandGrandChild";

function GrandChild({user}){

    return (
        <>
            <h1>GrandChild component: {user.grandChildName}</h1>
            <GrandGrandChild user={user}/>
        </>
    )
}

export default GrandChild;