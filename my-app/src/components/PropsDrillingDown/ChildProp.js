import GrandChild from "./GrandChild";

function ChildProp({user}){

    return (
        <>
            <h1>Child component: {user.childName}</h1>
            <GrandChild user={user}/>
        </>
    )
}

export default ChildProp;