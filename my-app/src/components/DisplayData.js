import { useState, useEffect } from "react";


function DisplayData() {
    // let productsData;

    const [count, setCount] = useState(0);
    const [productsData, setProductsData] = useState([])
    const [asending, setAsending]=useState(true);

    function Increment() {
        let inc = count + 1;
        setCount(inc);
        // count=count+1;
        console.log("After count---", count);
    }

    function Decrement() {
        setCount(count - 1);
        console.log("After count---", count);
    }

    useEffect(() => {
        console.log("useEffect---starting------")
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(result => {
                console.log("result----", result)
                setProductsData(result.products)
                console.log("productsData----", productsData)
            }).catch((error) => {
                console.log("error-----", error)
            })
    }, []);


    // let fecthData = () => {
    //     console.log("fecthData---------")
    //     return new Promise((res, rej) => {
    //         fetch("https://dummyjson.com/products")
    //             .then(response => response.json())
    //             .then(result => {
    //                 res(result)
    //             }).catch((error) => {
    //                 rej(error)
    //             })
    //     })

    // }

    // fecthData().then(data => {
    //     console.log("products data")
    //     // productsData = data.products[0];
    //     setProductsData(data.products[0])
    //     // console.log(productsData)
    //     // console.log("title---", productsData.title)
    //     // console.log("price---", productsData.price)
    // }
    // )

    function decSortData() {
        console.log("sortData----")
        const sortedArray = [...productsData].sort((a, b) => b.id - a.id);
        setProductsData(sortedArray)
    }

    function aseSortData() {
        console.log("sortData----")
        const sortedArray = [...productsData].sort((a, b) => a.id - b.id);
        setProductsData(sortedArray)
    }

    function sortData(){
        // console.log("befor-------",asending)
        // console.log("asending----",!asending)
        setAsending(!asending)
        // console.log("after-------",asending)
        if(asending){
            decSortData()
        }else{
            aseSortData()
        }

    }
    return (
        <div>
            <h1>Products Data</h1>

            <button onClick={sortData}>sort</button>
            <button onClick={decSortData}>Decnding</button>
            <button onClick={aseSortData}>ascending</button>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        productsData.map((product, index) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* <h1>{productsData.title}</h1>
            <h1>{productsData.price}</h1> */}

            {/* <h1>Count: {count}</h1>

            <button onClick={
                Increment
            }>
                Increment</button>


            <button onClick={
                Decrement
            }>
                Decrement</button> */}
        </div>
    )
}

export default DisplayData;