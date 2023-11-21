import { useState } from "react";
import Car from '../assets/images/car.webp';

const Lesson1 = (data) => {

    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    const toggleColor = () => {
        setActive(!active);
        console.log('clicked');
    }




    console.log(count);


    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2> Hello

                {count}

            </h2>

            <button onClick={increment}>+</button>

            <p className={active ? 'active-text' : ''}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A iure itaque amet, est voluptatem dolor odio molestias soluta sapiente doloremque!</p>

            <img src={Car} alt="car" />

            <button onClick={toggleColor}>Change color</button>

        </div>
    )
}

export default Lesson1;