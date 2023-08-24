import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase-config";
import Meal from "../assets/meal.png";

const Home = () => {
  const [carbs, setCarbs] = useState([]);
  const [protein, setProtein] = useState([]);
  const [salads, setSalads] = useState([]);
  const [meal, setMeal] = useState({
    carbs: "",
    protein: "",
    salad: "",
  });

  const fetchCarbs = async () => {
    await getDocs(collection(db, "meals")).then((r) => {
      const newData = r.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCarbs(newData[0].carbs);
      setProtein(newData[0].protein);
      setSalads(newData[0].salads);
    });
  };

  useEffect(() => {
    fetchCarbs();
  }, []);

  const generateMeal = (e) => {
    e.preventDefault();
    const c = carbs[Math.floor(Math.random() * carbs.length)];
    const p = protein[Math.floor(Math.random() * protein.length)];
    const s = salads[Math.floor(Math.random() * salads.length)];
    const containCarbs = e.target.carbs.checked;
    setMeal({ carbs: containCarbs ? c : "", protein: p, salad: s });
  };
  return (
    <div className='my-10 flex items-center justify-center flex-col gap-10'>
      <h1 className='text-3xl text-black-200 font-bold tracking-wider'>
        Направи ми ядене!
      </h1>
      <img src={Meal} alt='meal' />
      <form
        action=''
        className='flex  flex-col gap-5'
        onSubmit={(e) => generateMeal(e)}
      >
        <div className='flex gap-4'>
          <label htmlFor='carbs'>Ядат ли ти се въглехидрати?!</label>
          <input type='checkbox' id='carbs' name='carbs'></input>
        </div>

        <button
          type='submit'
          className='p-4 rounded-tl-3xl rounded-br-3xl drop-shadow-xl bg-primary tracking-wider hover:drop-shadow-2xl ease-in duration-100'
        >
          Генерирай!
        </button>
      </form>
      {meal.protein ? (
        <h1 className='font-bold text-3xl text-center'>
          Днес ще ядеш....
          <p className='p-4 text-4xl capitalize'>
            {meal.protein}
            {meal.carbs ? `, ${meal.carbs}` : null} и {meal.salad} салата
          </p>
        </h1>
      ) : null}
    </div>
  );
};

export default Home;
