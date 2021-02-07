import logo from './logo.svg';
import './App.css';
import Profil from './Profile/Profil';

function App() {
  
  const handleName = (fullName) => alert(`The user is ${fullName}`)

  return (
    <div className="App">       
<Profil 
     fullName="Michael Jackson "
     Date="(1958–2009)"
     Bio="Michael Jackson was a multi-talented musical entertainer who enjoyed a chart-topping career both with the Jackson 5 
     and as a solo artist. 
     He released one of the best-selling albums in history, 'Thriller,' in 1982, and had other number-one hits on 'Bad' and 'Off the Wall.'
     Who Was Michael Jackson?
     Known as the King of Pop Michael Jackson was a best-selling American singer, songwriter and dancer. As a child, Jackson became the lead singer of his family's popular Motown group, the Jackson 5. He went on to a solo career of astonishing worldwide success, delivering No. 1 hits from the albums Off the Wall, Thriller and Bad. In his later years, Jackson was dogged by allegations of child molestation. He died in 2009 at age 50 of a drug overdose just before launching a comeback tour."
     
     
     Profession="Singer, Songwriter and Dancer"
     handleName={handleName}
>
<img src="https://www.celebrityborn.com/admin/assets/images/people/uidOEaXwalXXY6siyeRm_2017_07_24.jpg"
alt="image" style={{borderRadius:'10px'}}/>

</Profil>
    </div>
  );
}

export default App;

