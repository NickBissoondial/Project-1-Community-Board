import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Chicago Local Eats 🍴</h1>
        <h2>Student Name: [Your Name] | Z-Number: [Your Z-Number]</h2>
      </div>

      <div className="container">
        {/* 1 */}
        <Card 
          name="Lou Malnati's" 
          specialty="Deep Dish Pizza" 
          image="https://www.loumalnatis.com/blog/wp-content/uploads/2015/07/deep-dish-pizza.jpg" 
          link="https://www.loumalnatis.com" 
        />
        {/* 2 */}
        <Card 
          name="Portillo's" 
          specialty="Chicago Hot Dogs" 
          image="https://www.portillos.com/assets/1/7/Desktop-Classic-Dog.png" 
          link="https://www.portillos.com" 
        />
        {/* 3 */}
        <Card 
          name="Kasama" 
          specialty="Filipino Brunch" 
          image="https://cdn.mrandmrssmith.com/images/1532x862/50531-kasama-chicago-usa.jpg" 
          link="https://www.kasamachicago.com" 
        />
        {/* 4 */}
        <Card 
          name="Au Cheval" 
          specialty="The Famous Burger" 
          image="https://auchevalchicago.com/wp-content/uploads/2021/08/au-cheval-burger.jpg" 
          link="https://auchevalchicago.com" 
        />
        {/* 5 */}
        <Card 
          name="Pequod's Pizza" 
          specialty="Caramelized Crust" 
          image="https://pequodspizza.com/wp-content/uploads/2021/04/pequods-pizza-chicago.jpg" 
          link="https://pequodspizza.com" 
        />
        {/* 6 */}
        <Card 
          name="Lula Cafe" 
          specialty="Farm-to-Table" 
          image="https://lulacafe.com/wp-content/uploads/2021/05/lula-cafe-dining-room.jpg" 
          link="https://lulacafe.com" 
        />
        {/* 7 */}
        <Card 
          name="Smoque BBQ" 
          specialty="Texas Style BBQ" 
          image="https://smoquebbq.com/assets/images/header-ribs.jpg" 
          link="https://smoquebbq.com" 
        />
        {/* 8 */}
        <Card 
          name="The Purple Pig" 
          specialty="Mediterranean Tapas" 
          image="https://thepurplepigchicago.com/wp-content/uploads/2021/06/purple-pig-food.jpg" 
          link="https://thepurplepigchicago.com" 
        />
        {/* 9 */}
        <Card 
          name="Al's Beef" 
          specialty="Italian Beef" 
          image="https://www.alsbeef.com/wp-content/uploads/2020/09/als-beef-sandwich.jpg" 
          link="https://www.alsbeef.com" 
        />
        {/* 10 */}
        <Card 
          name="Giordano's" 
          specialty="Stuffed Pizza" 
          image="https://giordanos.com/wp-content/uploads/2021/03/giordanos-pizza.jpg" 
          link="https://giordanos.com" 
        />
      </div>
    </div>
  )
}

export default App;