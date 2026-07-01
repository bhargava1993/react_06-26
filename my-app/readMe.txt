CRA -- create-react-app

npx create-react-app my-app


react we have 2 ways

1. class components

life cycle methods 

2. functional components (hooks) - useEffect


function sample(){
    return(

    )
}

jsx: javascript XML


1. passcal case: word starting letter would uppercase

ex: FirstName

2. camal case: word firstletter would be lowercase next words should be uppercase

ex: fristName

document.createElement("div")

components:

1. code reusable
2. independent
3. Accept props (data) - you can able to show diffent

4. state
5. organize your code


EventBinding: it will handle user input

onClick
onChange

onBlur

useState:
---------
store data at component level
data will change (useState) page will rerender(refresh web page)

useEffect: to perform sideEffect useEffect
---------

useEffect(()=>{}) ---> without dependency Array

useEffect(()=>{},[]) --> with dependency Array

useEffect(()=>{},[withPareter]) --> with dependency Array and argument

useEffect(()=>{

    //clean function
    return ()=>{}

},[])



Routing:
--------
A house has many rooms:

Living Room  -> Home Page  -> /home
Kitchen -> About Page -> /about
Bedroom -> Contact page ->/contactus


you need a module:

"react-router-dom",

step1:
BrowserRouter - it enabless Routing,
Routes - Contains all routes, 
Route-loads your component, 
Link- changes URl

-------------------------------

<BrowserRouter>
    <App />
<BrowserRouter>



--------------------------------------

real dom:

Virtual Dom: (VDOM) is a lightweight javascript reprasention of the real DOM
(copy of real dom)--> react crates Virtual dom

when props or state changes, react updates the virtual DOM first

it will compars with your real dom, if any chnages find it will place into the real dom.

Reconciliation:
---------------
Reconciliation is the process react uses to compare the 
old virtual dom with the new virtual dom and detarmine what gets changed:

compares: (Diffing algorithm)



simple flow:
------------------
state or props change
    |
new virtual dom
    |
Reconciliation process (diffing algorithm)
    |
update only changed parts
    |
real dom



axios:  It is a module you can communicate with
 server or apis by sedinh http request
-------------------------------
Http methods:

post
put
patch
get
delete
----------------------------

lifting state up:
-----------------

In react, "lifting state up" is a pattren where you move 
shared state from child components to their neraset parent 
component, so mulitple components can access and stay 
synchronized with same data.


useState - local to component

global state - 

context api (or)
redux
zustand

-----------------------

React functional component lifeCycle:
-------------------------------------

4 stages:
---------
1. Rendaring - display data to ui

2. Mounting - dispalying data to screen for the first time 

3. updating - state/props

4. unmounting - removing component form screen


component:
Rendaring --> Mounting --> updateing --> unmounting

useEffect: to perform sideEffect useEffect
---------

side effects are nothig but below this:
---------------------------------------

1. fetching data from api
2. setting timers
3. Adding event listenrs
4. updating the document 
5. cleanup the resources

useEffect(()=>{}) ---> without dependency Array

useEffect(()=>{},[]) --> with dependency Array

useEffect(()=>{},[withPareter]) --> with dependency Array and argument

useEffect(()=>{

    //clean function
    return ()=>{}

},[])
-----------------------

useEffectLayout(): synchronous way
----------------

------------------------------------
function add(a,b){
return a+b;
}

add(2,3)

--------------------------------

useMemo() --> M = Memory of a value

syntax:
-------------
useMemo(()=>{

},[dependency])


useCallback --> callback = Memory of a function

syntax:
-------------
useCallback(()=>{

},[dependency])

------------------------------------

useRef:
-------

const myRef = useRef(initialValue);

it returns an object like:

{
    current: initialValue
}
---------------------------------
class room board: - useState --> re-render
----------------

note book: --> useRef --> doesn't re-render
---------

forms:
------
1. controlled From --> useState ->

advantages:
-----------
1. easy validation
2. easy enable/disable buttons
3. instant feedback (e.g. password strent)
4. easier to debug
5. preffered for most rect application

disAdvantages:
--------------
1.more code
2.Every keystroke causes a stete update and re-render
-------------------------------------------

2. unControlled From --> useRef

advantages:
------------
1. less code
2. useful simple forms 
3. every keyStore page dosen't re-render

disAdvantages:
--------------
1. harder to debugging
2. hard to write validation
3. harder to keep the UI synchronized with input
4. Not ideal for complex forms





