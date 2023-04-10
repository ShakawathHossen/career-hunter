import React from 'react';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <div className='md:my-16 my-4'>
                <h1 className='text-center md:text-3xl text-2xl font-semibold'>Blog</h1>
            </div>
            <div className='bg-white pb-8'>
                <div className=' md:w-9/12 w-10/12 mx-auto md:py-3 py-1'>
                    <h1 className='text-3xl font-semibold md:my-8 my-4'>When Should We Use Context API ?</h1>
                    <p className='text-justify'>The React Context API should be used when you have data or state that needs to be shared across multiple components in your application, regardless of their nesting level in the component tree.
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level. This can be particularly useful for global data such as the user's authentication status or a theme setting that needs to be accessed by many components in different parts of the application.</p>

                </div>
                <div className=' md:w-9/12 w-10/12 mx-auto md:py-3 py-1'>
                    <h1 className='text-3xl font-semibold md:my-8 my-4'>What is custom hook in React?</h1>
                    <p className='text-justify'>A custom hook in React is a JavaScript function that allows you to reuse stateful logic between multiple components. Custom hooks are a way to encapsulate and share logic that would otherwise require duplication across multiple components or be difficult to manage within a single component.
                    To create a custom hook, you can use the built-in React hooks such as useState, useEffect, useContext, and useReducer to manage state and side effects. You can then export your custom hook and use it in any component that needs the logic it encapsulates.
                    </p>

                </div>
                <div className=' md:w-9/12 w-10/12 mx-auto md:py-3 py-1'>
                    <h1 className='text-3xl font-semibold md:my-8 my-4'>What is Use ref?</h1>
                    <p className='text-justify'>n React, the useRef hook is used to create a reference to a DOM element or a value that persists across re-renders of the component.
                    When you create a reference using useRef, you get an object with a current property that points to the current value of the reference. This current property can be read and modified directly.
                    One common use case for useRef is to access DOM nodes in your components. For example, if you want to set the focus to a text input field when a component mounts, you can create a ref using useRef and then pass it to the ref attribute of the input field. You can then use the current property of the ref to access the DOM node and call the focus method on it.</p>

                </div>
                <div className='md:w-9/12 w-10/12 mx-auto md:py-3 py-1'>
                    <h1 className='text-3xl font-semibold md:my-8 my-4'>What is Use memo ?</h1>
                    <p className='text-justify'>In React, the useMemo hook is used to memoize the result of a function, so that it only recomputes the result if one of its dependencies has changed.

                    When you use useMemo, you pass in a function and an array of dependencies. React will call the function and return the result, but it will only recompute the result if one of the dependencies has changed since the last time it was called.

                    The purpose of memoization is to optimize performance by avoiding unnecessary recomputations. If you have a complex function that takes a lot of time to run, and you only need to recompute the result when one of its dependencies changes, you can use useMemo to avoid running the function unnecessarily.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;