import React, { Component } from "react";
import GameOver from "./components/GameOver";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import cards from "./cardArray.json";
import "./App.css";

class App extends Component {
  // SETS THE STATE OF CARDS TO THE CARDARRAY.JSON
  state = {
    cards,
    score: 0,
    cardArray: [],
    highScore: 0,
    message: "",
    gameover: false,
    loserScore: 0
  };

  playAgain = () => {
    this.setState({
      score: 0,
      message: "",
      cardArray: [],
      gameover: false,
      loserScore: 0
    });
  };

  clickCard = id => {
    this.setState({ cards: this.shuffle(this.state.cards) });

    if (this.state.cardArray.indexOf(id) === -1) {
      //THE FOLLOWING CODE WILL PUSH TO THE ARRAY UNTIL THE ARRAY HAS 6. AT WHICH POINT IT WILL TRIM THE FIRST VALUE OF THE ARRAY AND MAINTAIN A COUNT OF 5.
      //WHAT THIS EFFECTIVELY DOES, IS ENSURE THAT THE ARRAY DOES NOT GET FILLED ONCE ALL 18 CHARACTERS HAVE BEEN CLICKED.
      // IT ENSURES THE GAME GOES ON FOREVER UNTIL THERE IS A MISTAKE. THIS ALLOWS THE USER TO REACH A VERY HIGH SCORE THAT IS PAST THE LIMIT OF 18.
      this.state.cardArray.push(id);
      if (this.state.cardArray.length > 5) {
        this.state.cardArray.shift();
        console.log("card array over 5: " + this.state.cardArray);
      }
      this.setState({
        cardArray: this.state.cardArray,
        message: "And another. - DJ Khaled",
        score: this.state.score + 1,
        loserScore: this.state.score + 1,
        gameover: false
      });
      // ENSURE THAT THE HIGHSCORE UPDATES ON THE FLY ALONG WITH THE SCORE.
      if (this.state.score >= this.state.highScore) {
        this.setState({
          highScore: this.state.score + 1
        });
      }
      console.log("card array: " + this.state.cardArray);
    } else {
      // ZERO EVERYTHING OUT.
      this.setState({
        loserScore: this.state.loserScore,
        score: 0,
        cardArray: [],
        message: "It's over. leave.",
        gameover: true
      });

      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score
        });
      }
    }
  };

  shuffle = cardArray => {
    var j, x, i;
    for (i = cardArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = cardArray[i];
      cardArray[i] = cardArray[j];
      cardArray[j] = x;
    }
    return cardArray;
  };

  renderContent = () => {
    if (this.state.gameover === false) {
      return this.state.cards.map(card => (
        <Card
          id={card.id}
          key={card.id}
          clickCard={this.clickCard}
          name={card.name}
          image={card.image}
        />
      ));
    } else {
      return (
        <GameOver
          playAgain={this.playAgain}
          loserScore={this.state.loserScore}
        />
      );
    }
  };

  render() {
    return (
      <Wrapper>
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        {this.renderContent()}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
