import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Florida Local Eats 🍴</h1>
        <h2>Student Name: Nick Bissoondial | Z-23618351 </h2>
      </div>

<div className="container">
  {/* 1 */}
  <Card 
    name="Joe's Stone Crab" 
    specialty="Stone Crabs & Key Lime Pie" 
    image="https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400" 
    link="https://www.joesstonecrab.com" 
  />
  {/* 2 */}
  <Card 
    name="Sloppy Joe's Bar" 
    specialty="World Famous Sandwiches & Cocktails" 
    image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400" 
    link="https://sloppyjoes.com" 
  />
  {/* 3 */}
  <Card 
    name="Versailles Restaurant" 
    specialty="World Famous Cuban Cafe" 
    image="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400" 
    link="https://www.versaillesrestaurant.com" 
  />
  {/* 4 */}
  <Card 
    name="The Old Salty Dog" 
    specialty="Deep Fried Hot Dogs" 
    image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" 
    link="https://theoldsaltydog.com" 
  />
  {/* 5 */}
  <Card 
    name="Bern's Steak House" 
    specialty="World-Class Steaks & Wine" 
    image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400" 
    link="https://bernssteakhouse.com" 
  />
  {/* 6 */}
  <Card 
    name="Blue Heaven" 
    specialty="Island Breakfast & Large Pies" 
    image="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400" 
    link="https://www.blueheavenkw.com" 
  />
  {/* 7 */}
  <Card 
    name="Star Fish Company" 
    specialty="Dockside Fresh Seafood" 
    image="https://www.starfishcompany.com/wp-content/uploads/elementor/thumbs/IMG_2503-qdpmgfnvqay1mwuxc0zh8z5no77kdtlwrd9edw6daq.jpg" 
    link="https://www.starfishcompany.com" 
  />
  {/* 8 */}
  <Card 
    name="Frenchy's Rockaway" 
    specialty="Famous Grouper Sandwiches" 
    image="https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400" 
    link="https://frenchysonline.com" 
  />
  {/* 9 */}
  <Card 
    name="Satchel's Pizza" 
    specialty="Quirky Vibes & Deep Dish" 
    image="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" 
    link="https://www.satchelspizza.com" 
  />
  {/* 10 */}
  <Card 
    name="Kermit’s Key West" 
    specialty="Everything Key Lime" 
    image="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400" 
    link="https://www.keylimeshop.com" 
  />
</div>
      
    </div>
  )
}

export default App;