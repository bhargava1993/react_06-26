import ChildProp from "./ChildProp";


function Parent() {
    const user = {
        grandChildName: "John2",
        childName: "John1",
        grandGrandChildName: "john3"
    }
    
    return (
        <>
            <h1>parent component: Jhone</h1>
            <ChildProp user={user} />
        </>
    )
}

export default Parent;