import "../style/Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
      <h1 className="title1">Comment jouer ? </h1>
      <p>
        <span className="num">- 1 -</span><br/>
        Les <b>paroles de 10 musiques</b> vont être lues à haute voix.<br/>
        <span className="num">- 2 -</span><br/>
         <b>Vous avez 30
        secondes</b> pour trouver le nom et l'artiste de chaque musique. <br/>
        <span className="num">- 3 -</span><br/>
        Une fois votre réponse envoyée, <b>vous ne pourrez pas revenir en arrière</b> :)
      </p>
      <div className="image">

      <img src="/assets/music.png" alt="music" width="150"/>
      </div>

      {/* bouton = link to 'Game.jsx' */}
      <h2>Prêt à jouer ?</h2>
      <button className="play" type="button">Jouer</button>
      
   
       
      </div>
    </div>
  );
};

export default Home;
